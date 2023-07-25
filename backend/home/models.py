from django.conf import settings
from django.db import models
class Person(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    icon = models.ImageField(upload_to="person/icon/images/",null=True,blank=True,)
