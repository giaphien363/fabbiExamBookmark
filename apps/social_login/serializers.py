import re

from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from rest_framework.authtoken.admin import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'password']

        extra_kwargs = {
            'password': {
                'required': True,
                'write_only': False
            },
            'email': {
                'required': False,
            },
            'username': {
                'required': True,
            }
        }

    def validate_email(self, email: str) -> str:
        pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
        check = pattern.search(email)
        if check is None:
            raise serializers.ValidationError("You have to provide email address!")
        return email

    def validate_password(self, raw: str) -> str:
        """
        Hash value passed by user.
        :param value: password of a user
        :return: a hashed version of the password
        """
        password = make_password(raw)
        return password



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        # token['username'] = user.username
        # Add more custom fields from your custom user model, If you have a custom user model.
        # ...

        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['username'] = self.user.username

        return data

