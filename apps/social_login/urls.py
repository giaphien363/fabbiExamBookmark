from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path
from .views import GoogleLogin, FacebookLogin, RegisterView, MyTokenObtainPairView, UserView

# prefix ""

urlpatterns = [
    path('social-login/google/', GoogleLogin.as_view(), name='google_login'),
    path('social-login/facebook/', FacebookLogin.as_view(), name='facebook_login'),
    path('auth/user/', UserView.as_view(), name='current_user'),
    path('create/user/', RegisterView.as_view(), name='create_user'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
