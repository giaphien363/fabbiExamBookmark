from django.http.response import Http404
from django.http.response import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.bookmark.models import BookMark
from apps.bookmark.serializer import BookmarkSerializer
from apps.category.models import Category


# Create your views here.

def getCategoryId(id):
    cate_id = int(id)

    if cate_id is not None:
        try:
            value = Category.objects.get(id=cate_id)
            if value:
                return cate_id
        except Category.DoesNotExist:
            return 1


class BookmarkAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        bookmark = BookMark.objects.all()
        cateId = self.request.query_params.get('category')
        if cateId is not None:
            bookmark = bookmark.filter(category=cateId)

        title = self.request.query_params.get('title')

        if title is not None:
            bookmark = bookmark.filter(title__icontains=title)

        serializer = BookmarkSerializer(bookmark, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = BookmarkSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DetailEvent(APIView):
    permission_classes = [AllowAny]

    def get_object(self, pk):
        try:
            return BookMark.objects.get(id=pk)
        except BookMark.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        serializer = BookmarkSerializer(bookmark)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        serializer = BookmarkSerializer(bookmark, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        bookmark.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
