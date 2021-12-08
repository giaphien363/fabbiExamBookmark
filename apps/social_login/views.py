from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from apps.social_login.serializers import UserSerializer, MyTokenObtainPairSerializer


class GoogleLogin(SocialLoginView):
    authentication_classes = []  # disable authentication
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:3000"
    client_class = OAuth2Client

class FacebookLogin(SocialLoginView):
    authentication_classes = []  # disable authentication
    adapter_class = FacebookOAuth2Adapter
    callback_url = "http://localhost:3000"
    client_class = OAuth2Client

class UserView(APIView):
    # permission_classes = [AllowAny]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        username = serializer.data['username']
        password = serializer.data['password']

        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({"error": "something went wrong!"})
        token = RefreshToken.for_user(user)
        data = {
            "refresh": str(token),
            "access": str(token.access_token),
            "username": username
        }
        return Response(data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
