import { Component } from '@angular/core';
import { Card } from './Card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  cards: Card[];
  constructor() {
    this.cards = [
      {
        image: "assets/images/laptop-bag-1.webp",
        heading: 'Laptop Bag 1',
        price: 50.00,
        link: "#"
      },
      {
        image: "assets/images/laptop-bag-2.webp",
        heading: 'Laptop Bag 2',
        price: 35.00,
        link: "#"
      },
      {
        image: "assets/images/laptop-bag-3.webp",
        heading: 'Laptop Bag 3',
        price: 50.00,
        link: "#"
      },
      {
        image: "assets/images/laptop-bag-4.jpg",
        heading: 'Laptop Bag 4',
        price: 35.00,
        link: "#"
      },
      {
        image: "assets/images/Lovevook-laptop-bag.webp",
        heading: 'Lovevook Laptop Bag',
        price: 36.00,
        link: "#"
      },
      {
        image: "assets/images/Voova-laptop-bag.webp",
        heading: 'Voova Laptop Bag',
        price: 19.00,
        link: "#"
      },
      {
        image: "assets/images/women-laptop-bag.webp",
        heading: 'Stylish Laptop Bag',
        price: 33.00,
        link: "#"
      },
      {
        image: "assets/images/Ytonet-laptop-bag.webp",
        heading: 'Ytonet Laptop Bag',
        price: 15.00,
        link: "#"
      },
      {
        image: "assets/images/Bagsmart-laptop-bag.webp",
        heading: 'Ytonet Laptop Bag',
        price: 15.00,
        link: "#"
      },
      {
        image: "assets/images/Dachee-laptop-bag.webp",
        heading: 'Ytonet Laptop Bag',
        price: 15.00,
        link: "#"
      },
      {
        image: "assets/images/Lovevook-laptop-bag-2.webp",
        heading: 'Ytonet Laptop Bag',
        price: 15.00,
        link: "#"
      },
      {
        image: "assets/images/Lovevook-laptop-bagpack.webp",
        heading: 'Ytonet Laptop Bag',
        price: 15.00,
        link: "#"
      },
      {
        image: "assets/images/Mosiso-laptop-bag.webp",
        heading: 'Ytonet Laptop Bag',
        price: 15.00,
        link: "#"
      },
    ]
  }
}
