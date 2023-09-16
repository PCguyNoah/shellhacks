from django.shortcuts import render
from django.db import models

# Create your views here.

class User(models.Model) :
  firstName = models.CharField(max_length=100)
  lastName = models.CharField(max_length=100)
  email = models.EmailField(unique=true)
  phone = models.CharField(max_length=15)
  role = models.ForeignKey(Role, on_delete=models.CASCADE)

class Entrepreneur(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=true)

class Investor(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=true)