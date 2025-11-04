import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: AI-консультант для сайта строительства домов
    Args: event с httpMethod и body с message
    Returns: JSON с ответом от GPT-4
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        import openai
        
        body_data = json.loads(event.get('body', '{}'))
        user_message = body_data.get('message', '')
        
        if not user_message:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Message is required'})
            }
        
        api_key = os.environ.get('OPENAI_API_KEY')
        if not api_key:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'OpenAI API key not configured'})
            }
        
        client = openai.OpenAI(api_key=api_key)
        
        system_prompt = """Ты - профессиональный консультант строительной компании "Строим в Крыму".

Основная информация о компании:
- Строим индивидуальные дома под ключ в Крыму более 10 лет
- Построено более 150 домов по всему Крыму (Ялта, Алушта, Судак, Евпатория)
- Гарантия на работы до 10 лет
- Собственная команда опытных мастеров
- Прозрачная смета без скрытых расходов
- Соблюдение договорных сроков

Примеры проектов:
1. Панорамная вилла (280 м², Ялта) - современный дом с видом на море
2. Средиземноморская усадьба (320 м², Алушта) - элегантная вилла с бассейном
3. Минималистичный коттедж (240 м², Судак) - современная архитектура у моря

Этапы работы:
1. Бесплатная консультация и подбор участка
2. Индивидуальное проектирование или адаптация типового проекта
3. Договор с прозрачной сметой
4. Строительство под ключ с контролем качества
5. Гарантийное обслуживание

Контакты:
- Телефон: +7 (978) 123-45-67
- Email: info@crimea-build.ru

Твоя задача - консультировать клиентов, отвечать на вопросы о строительстве, проектах, ценах, сроках. 
Будь вежливым, профессиональным и конкретным. 
Если клиент готов заказать проект - предложи оставить заявку на сайте или позвонить.
Отвечай кратко и по делу, максимум 2-3 предложения."""

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ],
            max_tokens=300,
            temperature=0.7
        )
        
        reply = response.choices[0].message.content
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'reply': reply})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Server error: {str(e)}'})
        }
