from apps.bookmark.models import BookMark
from rest_framework import serializers

class BookmarkSerializer(serializers.ModelSerializer) :
    class Meta :
        model = BookMark 
        fields = '__all__'
