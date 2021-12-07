from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path
from .views import GoogleLogin, RegisterView, MyTokenObtainPairView

# prefix ""

urlpatterns = [
    path('social-login/google/', GoogleLogin.as_view(), name='google_login'),
    path('create/user/', RegisterView.as_view(), name='create_user'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
