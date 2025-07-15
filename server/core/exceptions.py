import logging
from rest_framework.views import exception_handler
from rest_framework import status

logger = logging.getLogger(__name__)

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    
    if response is not None:
        logger.error(
            f"API Error - {exc.__class__.__name__}: {str(exc)}",
            extra={'context': context}
        )
        
        custom_response = {
            'status': 'error',
            'code': response.status_code,
            'message': 'An error occurred',
            'data': None,
            'errors': response.data
        }
        response.data = custom_response
    
    return response