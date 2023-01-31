import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Caps' },
      { id: 2, name: 'Сlothes' },
      { id: 3, name: 'Hats' },
      { id: 4, name: 'Hoodie' },
      { id: 5, name: 'Jakets' },
      { id: 6, name: 'Jeans' },
      { id: 7, name: 'Shoes' },
      { id: 8, name: 'Sweater' },
      { id: 9, name: 'T-shirts' },
      { id: 10, name: 'Watches' },
    ]
    this._brands = [
      { id: 1, name: 'Nike' },
      { id: 2, name: 'H&M' },
      { id: 3, name: 'Bershka' },
    ]
    this._devices = [
      {
        id: 1,
        name: 'Nike airmax 90 2022',
        price: 250,
        rating: 5,
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f1176f7-0ffa-46ac-8cd7-df5e292270c7/scarpa-air-max-90-futura-q7qs1c.png',
      },
      { id: 2, name: 'H&M Winter Clothes women', price: 300, rating: 5 },
      { id: 3, name: 'Nike Free run 5.0', price: 200, rating: 5 },
      { id: 4, name: 'Nike Airmax 87', price: 200, rating: 5 },
      { id: 5, name: 'Nike 3.0 t-shirt', price: 200, rating: 5 },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }
  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
