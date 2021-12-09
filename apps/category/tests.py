from django.test import TestCase

from apps.category.models import Category


class CategoryTests(TestCase):
    def test_new_category(self):
        cate = Category.objects.create(categoryName='Favorite')
        self.assertEqual(cate.categoryName, 'Favorite')
