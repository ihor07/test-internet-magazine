import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Shoes' },
      { id: 2, name: 'Сlothes' },
    ]
    this._brands = [
      { id: 1, name: 'Nike' },
      { id: 2, name: 'H&M' },
    ]
    this._devices = [
      { id: 1, name: 'Nike airmax 90 2022', price: 250, rating: 5 },
      { id: 2, name: 'H&M Winter Clothes women', price: 300, rating: 5 },
      { id: 3, name: 'Nike Free run 5.0', price: 200, rating: 5 },
    ]
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
  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
}
