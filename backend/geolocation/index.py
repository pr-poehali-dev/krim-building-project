import json
import urllib.request
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Определение города пользователя по IP для персонализации контента
    Args: event с httpMethod и headers
    Returns: JSON с данными о локации (city, region, country)
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        headers = event.get('headers', {})
        request_context = event.get('requestContext', {})
        identity = request_context.get('identity', {})
        
        user_ip = (
            headers.get('x-forwarded-for', '').split(',')[0].strip() or
            headers.get('x-real-ip', '') or
            identity.get('sourceIp', '') or
            '8.8.8.8'
        )
        
        if user_ip in ['127.0.0.1', 'localhost', '::1']:
            user_ip = '8.8.8.8'
        
        geo_url = f'http://ip-api.com/json/{user_ip}?fields=status,country,countryCode,region,regionName,city,lat,lon'
        
        with urllib.request.urlopen(geo_url, timeout=3) as response:
            geo_data = json.loads(response.read().decode('utf-8'))
        
        if geo_data.get('status') == 'success':
            crimea_cities = ['Ялта', 'Симферополь', 'Севастополь', 'Алушта', 'Судак', 'Феодосия', 'Евпатория', 'Керчь', 'Бахчисарай']
            city = geo_data.get('city', 'вашем городе')
            region = geo_data.get('regionName', '')
            is_crimea = any(crimea_city in city or crimea_city in region for crimea_city in crimea_cities)
            
            result = {
                'city': city,
                'region': region,
                'country': geo_data.get('country', 'Россия'),
                'countryCode': geo_data.get('countryCode', 'RU'),
                'lat': geo_data.get('lat'),
                'lon': geo_data.get('lon'),
                'isCrimea': is_crimea,
                'personalized': True
            }
        else:
            result = {
                'city': 'вашем городе',
                'region': '',
                'country': 'Россия',
                'countryCode': 'RU',
                'isCrimea': False,
                'personalized': False
            }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=3600'
            },
            'isBase64Encoded': False,
            'body': json.dumps(result)
        }
        
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'city': 'вашем городе',
                'region': '',
                'country': 'Россия',
                'isCrimea': False,
                'personalized': False,
                'error': str(e)
            })
        }
