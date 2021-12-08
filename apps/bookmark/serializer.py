from apps.bookmark.models import BookMark
from apps.category.models import Category
from rest_framework import serializers


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookMark
        fields = ['id', 'title', 'url', 'category']
        extra_kwargs = {
            'category': {
                'required': False,
            },
        }
