from django.http import Http404
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.category.models import Category
from apps.category.serializers import CategorySerializer


class CategoryView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        categories = Category.objects.filter()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class CategoryDetailView(APIView):
    permission_classes = [AllowAny]

    def get_object(self, id):
        try:
            return Category.objects.get(id=id)
        except Category.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        cate = self.get_object(id)
        serializer = CategorySerializer(cate)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        cate = self.get_object(id)
        serializer = CategorySerializer(cate, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        if id == 1:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        cate = self.get_object(id)
        if cate:
            cate.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
