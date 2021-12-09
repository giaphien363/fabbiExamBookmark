from bookmarklet.default_settings import *
from datetime import timedelta

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME':  env('DATABASE'),
        'USER': env('USER_NAME'),
        'PASSWORD': env('PASSWORD'),
        'HOST': env('HOST'),
        'PORT': env('PORT'),
    }
}

AUTH_PASSWORD_VALIDATORS = []

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE': [
            'profile',
            'email',
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        }
    },
    'facebook': {
        'METHOD': 'oauth2',
        'SCOPE': ['email', 'public_profile'],
        'AUTH_PARAMS': {'auth_type': 'reauthenticate'},
        'FIELDS': [
            'id',
            'first_name',
            'last_name',
            'middle_name',
            'name',
            'name_format',
            'picture',
            'short_name'
        ],
        'EXCHANGE_TOKEN': True,
        'LOCALE_FUNC': lambda request: 'en_US',
        'VERIFIED_EMAIL': False,
        'VERSION': 'v7.0',
    }
}
# Disable email verification since this is just a test.
# If you want to enable it, you'll need to configure django-allauth's email confirmation pages

SOCIALACCOUNT_EMAIL_VERIFICATION = "none"
SOCIALACCOUNT_EMAIL_REQUIRED = False
SOCIALACCOUNT_QUERY_EMAIL = True

REST_USE_JWT = True
SITE_ID = 1

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,  # IMPORTANT
    'BLACKLIST_AFTER_ROTATION': True,  # IMPORTANT
    'UPDATE_LAST_LOGIN': True,
}

CORS_ORIGIN_ALLOW_ALL = True

# Rest Settings
REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.BasicAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        "dj_rest_auth.utils.JWTCookieAuthentication",
    ),
}
