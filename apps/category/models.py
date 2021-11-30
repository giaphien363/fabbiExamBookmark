from django.db import models


# Create your models here.
class Category(models.Model):
    categoryName = models.CharField(max_length=255, unique=True, default='Bookmarks')

    def __str__(self):
        return self.categoryName

    class Meta:
        db_table = 'categories'
