from django.db import models
from django.contrib.auth.models import User

class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    telephone = models.CharField(max_length=255)
    email = models.EmailField()

class Produit(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField(max_length=150)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    categorie = models.CharField(max_length=255)
    image = models.ImageField(upload_to='produits/')
    quantite_en_stock = models.IntegerField()

class Commande(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date_commande = models.DateTimeField(auto_now_add=True)
    date_livraison = models.DateTimeField(null=True, blank=True)
    statut = models.CharField(max_length=255, choices=[('En cours', 'En cours'), ('Livrée', 'Livrée'), ('Annulée', 'Annulée')])

class Paiement(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    mode_paiement = models.CharField(max_length=255, choices=[('Carte de crédit', 'Carte de crédit'), ('Orange Money', 'Orange Money'), ('Mobile Money', 'Mobile Money')])
    montant = models.DecimalField(max_digits=10, decimal_places=2)
    date_paiement = models.DateTimeField(auto_now_add=True)

class Avis(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    note = models.IntegerField()
    commentaire = models.TextField()
    date_avis = models.DateTimeField(auto_now_add=True)


class CartItem(models.Model):
    product = models.ForeignKey('Produit', on_delete=models.CASCADE)
    quantity = models.IntegerField()

class ShippingAddress(models.Model):
    client = models.ForeignKey('Client', on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    telephone = models.CharField(max_length=255)
    email = models.EmailField()

class BillingInformation(models.Model):
    client = models.ForeignKey('Client', on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    telephone = models.CharField(max_length=255)
    email = models.EmailField()
    numero_carte_credit = models.CharField(max_length=255)
    date_expiration = models.DateField()
    cvc = models.CharField(max_length=255)

class Newsletter(models.Model):
    email = models.EmailField()
    date_inscription = models.DateTimeField(auto_now_add=True)

    