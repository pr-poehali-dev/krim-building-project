"""
Business: Отправка расчёта стоимости дома на email клиента
Args: event - dict с httpMethod, body (email, calculationData)
      context - object с request_id
Returns: HTTP response dict
"""

import json
import os
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field


class CalculationData(BaseModel):
    area: int = Field(..., ge=80, le=500)
    floors: int = Field(..., ge=1, le=3)
    material: str = Field(..., pattern='^(brick|block|frame)$')
    finishing: str = Field(..., pattern='^(basic|standard|premium)$')
    extras: Dict[str, bool]
    price: int
    pricePerSqm: int


class SendCalculationRequest(BaseModel):
    email: EmailStr
    name: str = Field(..., min_length=2, max_length=100)
    calculation: CalculationData


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    request_data = SendCalculationRequest(**body_data)
    
    resend_api_key = os.environ.get('RESEND_API_KEY')
    if not resend_api_key:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email service not configured'}),
            'isBase64Encoded': False
        }
    
    # Material labels
    material_labels = {
        'brick': 'Кирпич',
        'block': 'Газобетон',
        'frame': 'Каркасный'
    }
    
    finishing_labels = {
        'basic': 'Базовая',
        'standard': 'Стандарт',
        'premium': 'Премиум'
    }
    
    extras_labels = {
        'pool': 'Бассейн',
        'garage': 'Гараж',
        'terrace': 'Терраса',
        'smartHome': 'Умный дом'
    }
    
    calc = request_data.calculation
    selected_extras = [extras_labels[k] for k, v in calc.extras.items() if v]
    extras_text = ', '.join(selected_extras) if selected_extras else 'Нет'
    
    # Email HTML
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #194974 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
            .content {{ background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }}
            .price-block {{ background: white; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
            .price {{ font-size: 36px; font-weight: bold; color: #194974; margin: 10px 0; }}
            .param {{ background: white; padding: 15px; margin: 10px 0; border-radius: 6px; display: flex; justify-content: space-between; }}
            .param-label {{ color: #6b7280; }}
            .param-value {{ font-weight: bold; color: #194974; }}
            .footer {{ text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; font-size: 14px; }}
            .cta-button {{ display: inline-block; background: #B6552B; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: bold; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Ваш расчёт стоимости дома</h1>
                <p>Спасибо за интерес к нашим услугам, {request_data.name}!</p>
            </div>
            <div class="content">
                <div class="price-block">
                    <div style="color: #6b7280; font-size: 14px;">Примерная стоимость</div>
                    <div class="price">{calc.price / 1_000_000:.1f} млн ₽</div>
                    <div style="color: #6b7280;">{calc.pricePerSqm:,} ₽/м²</div>
                </div>
                
                <h3 style="color: #194974; margin-top: 30px;">Параметры вашего дома:</h3>
                
                <div class="param">
                    <span class="param-label">Площадь</span>
                    <span class="param-value">{calc.area} м²</span>
                </div>
                
                <div class="param">
                    <span class="param-label">Этажей</span>
                    <span class="param-value">{calc.floors}</span>
                </div>
                
                <div class="param">
                    <span class="param-label">Материал стен</span>
                    <span class="param-value">{material_labels[calc.material]}</span>
                </div>
                
                <div class="param">
                    <span class="param-label">Уровень отделки</span>
                    <span class="param-value">{finishing_labels[calc.finishing]}</span>
                </div>
                
                <div class="param">
                    <span class="param-label">Дополнительно</span>
                    <span class="param-value">{extras_text}</span>
                </div>
                
                <div style="background: #eff6ff; padding: 20px; border-radius: 6px; margin-top: 20px;">
                    <strong>⚠️ Обратите внимание:</strong>
                    <p style="margin: 10px 0 0 0;">Это предварительный расчёт. Точную стоимость определим после осмотра участка и уточнения всех деталей проекта.</p>
                </div>
                
                <div style="text-align: center;">
                    <a href="https://wa.me/79780000000" class="cta-button">Связаться с нами</a>
                </div>
            </div>
            <div class="footer">
                <p>Строительство домов в Крыму</p>
                <p>Телефон: +7 (978) 000-00-00 | Email: info@krim-building.ru</p>
                <p style="font-size: 12px; margin-top: 20px;">Это письмо отправлено автоматически. Пожалуйста, не отвечайте на него.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    # Send via Resend API
    import urllib.request
    
    email_data = {
        'from': 'Строительство в Крыму <onboarding@resend.dev>',
        'to': [request_data.email],
        'subject': f'Расчёт стоимости дома {calc.area} м² — {calc.price / 1_000_000:.1f} млн ₽',
        'html': html_content
    }
    
    req = urllib.request.Request(
        'https://api.resend.com/emails',
        data=json.dumps(email_data).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {resend_api_key}',
            'Content-Type': 'application/json'
        },
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            response_data = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Расчёт отправлен на вашу почту',
                    'emailId': response_data.get('id')
                }),
                'isBase64Encoded': False
            }
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Failed to send email',
                'details': error_body
            }),
            'isBase64Encoded': False
        }
