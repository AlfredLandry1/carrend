from .models import Client, Commande, Produit, Paiement, Avis, Newsletter, CartItem, ShippingAddress, BillingInformation
from rest_framework import serializers

# create serializers here
class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('nom', 'prenom', 'adresse', 'telephone', 'email')
        user = serializers.CharField()

    
class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = '__all__'
    

class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = ('client', 'produit', 'note', 'commentaire', 'date_avis')
    
    
class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'
    
    
class CommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commande
        fields = ('client', 'date_commande', 'date_livraison', 'statut')
    
    
class PaiementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paiement
        fields = '__all__'
    
    
class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'
    
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'
    
class BillingInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillingInformation
        fields = "__all__"
