export class Cart {
  static storageName = 'cart_db'

  static getAllProducts() {
    const products = localStorage.getItem(this.storageName)
    if (products === null) {
      return [];
    } else {
      return JSON.parse(products)
    }

  }

  static addToCart(product: any) {
    const products = this.getAllProducts()
    const idx = products.findIndex((item: any) => item._id === product._id)

    if (idx === -1) {
      product['count'] = 1;
      products.push(product)
    } else {
      products[idx]['count'] += 1;
    }
    localStorage.removeItem(this.storageName)
    localStorage.setItem(this.storageName, JSON.stringify(products))
  }

  static increase(product: any, type: number) {
    if (product.count <= 1) {
      return;
    }

    const products = this.getAllProducts()
    const idx = products.findIndex((item: any) => item._id == product._id)
    products[idx]['count'] += type;
    localStorage.removeItem(this.storageName)
    localStorage.setItem(this.storageName, JSON.stringify(products))
  }

  static remove(product: any) {
    const products = this.getAllProducts()
    const idx = products.findIndex((item: any) => item._id == product._id)
    products.splice(idx, 1)
    localStorage.removeItem(this.storageName)
    localStorage.setItem(this.storageName, JSON.stringify(products))
  }

  static reset() {
    localStorage.removeItem(this.storageName)
  }
}
