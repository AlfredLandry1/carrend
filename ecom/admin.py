from django.contrib import admin
from .models import Client, Produit

# name = admin
# email = admin@gmail.com
#password = 1234admin1234

# Register your models here.
class ClientAdmin(admin.ModelAdmin):
    pass
admin.site.register(Client, ClientAdmin)

class ProduitAdmin(admin.ModelAdmin):
    pass
admin.site.register(Produit, ProduitAdmin)
