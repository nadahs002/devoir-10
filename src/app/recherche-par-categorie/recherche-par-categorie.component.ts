import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {

produits!: Produit[];
categories !: Categorie[];
IdCategorie! : number;




  constructor(private produitService: ProduitService) {
    
   }

  ngOnInit(): void {
    this.produits = [];//this.produitService.listeProduits();
    this.categories=this.produitService.listeCategories();

    
  }

  supprimerProduit(p: Produit)
  {
    // console.log(p);
  
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.produitService.supprimerProduit(p);
      this.produits = this.produitService.RechercheParCategorie(this.IdCategorie);
    }
  }

  onChange() {
    //  console.log(this.IdCategorie);
    this.produits=this.produitService.RechercheParCategorie(this.IdCategorie);
     }

 

}
