from django.db import models
from django.core.validators import RegexValidator, MinLengthValidator, MaxLengthValidator, MinValueValidator, MaxValueValidator

phone_regex = RegexValidator(regex=r'^\+?1?\d{10,10}$',
                                 message="Номер Телефона должен быть в формате: '0555111333'. 10 символов.")
# предполагается что будут номера только из КР

tin_regex = RegexValidator(regex=r'^\+?1?\d{14,14}$',
                                 message="Номер ИНН должен быть в формате: '12345678901234'. 14 символов.")

class Profile(models.Model):
    fullname = models.CharField(max_length=255)
    phone_number = models.CharField(validators=[phone_regex], max_length=13, unique=True)
    address = models.CharField(max_length=500)
    tin = models.CharField(validators=[tin_regex], max_length=14, unique=True)

    def __str__(self):
        return self.fullname
