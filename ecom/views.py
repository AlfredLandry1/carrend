from rest_framework import viewsets

from .models import Client, Commande, Avis, Paiement, Produit, Newsletter, CartItem, ShippingAddress, BillingInformation
from .serializers import ProduitSerializer, NewsletterSerializer, AvisSerializer, CommandeSerializer, PaiementSerializer, ClientSerializer, CartItemSerializer, ShippingAddressSerializer, BillingInformationSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Paiement.objects.all()
    serializer_class = PaiementSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer

class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer

class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

class ShippingAddressViewSet(viewsets.ModelViewSet):
    queryset = ShippingAddress.objects.all()
    serializer_class = ShippingAddressSerializer

class BillingInformationViewSet(viewsets.ModelViewSet):
    queryset = BillingInformation.objects.all()
    serializer_class = BillingInformationSerializer
