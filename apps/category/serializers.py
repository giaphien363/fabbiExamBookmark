from rest_framework import serializers

from apps.category.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'categoryName']

    def validate(self, data):
        print(data)
        try:
            if data['categoryName'] is None or not data['categoryName']:
                raise serializers.ValidationError({"categoryName": "This field is required!"})
        except:
            raise serializers.ValidationError({"categoryName": "This field is required!"})

        return data
