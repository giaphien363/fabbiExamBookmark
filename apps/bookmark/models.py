from django.db import models

from apps.category.models import Category


class BookMark(models.Model):
    title = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'bookmarks'
