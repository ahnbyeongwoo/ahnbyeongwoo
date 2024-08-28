class Product {
  // 제품의 기본 정보 속성을 미리 선언해놓을 수 있지만, 주석 처리되어 있음
  // title = 'DEFAULT'; // 기본 타이틀 값
  // imageUrl; // 이미지 URL
  // description; // 설명
  // price; // 가격

  // 생성자 함수: 새로운 Product 객체를 생성할 때 호출됨
  constructor(title, image, desc, price) {
    this.title = title; // 제품의 타이틀을 설정
    this.imageUrl = image; // 제품 이미지 URL을 설정
    this.description = desc; // 제품 설명을 설정
    this.price = price; // 제품 가격을 설정
  }
}

class ElementAttribute{
  constructor(attrName,attrValue){
    this.name=attrName;
    this.value=attrValue;
  }
}

class Component{//상속
  constructor(renderHookId){
    this.hookId=renderHookId;
  }

  createRootElement(tag,cssClasses, attributes){
    const rootElement=document.createElement(tag);
    if(cssClasses){
      rootElement.className=cssClasses;
    }
    if(attributes && attributes.length>0){
      for(const attr of attributes){
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return this.rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value){
    this.items=value;//value가 cartItems의 배열
    this.totalOutput.innerHTML = `<h2>Total:  ${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount(){
    const sum=this.items.reduce(
      (prevValue, curItem) => prevValue+curItem.price,
    0
  );
  return sum;
  }

  constructor(renderHookId){
    super(renderHookId);//부모 클래스 생성자 호출
  }

  addProduct(product) {
    const updatedItems=[...this.items];
    updatedItems.push(product);
    this.cartItems=updatedItems;
  }
  render() {
    //총계만 렌더링
    this.createRootElement('section','cart');
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total: \${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem extends Component {
  // 생성자 함수: ProductItem 객체를 생성할 때 호출되며, 제품 정보(Product)를 인자로 받음
  constructor(product,renderHookId) {
    super();
    this.product = product; // 인자로 받은 product 객체를 클래스 내부에서 사용 가능하도록 저장
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    
    const prodEl = document.createElement("li",'product-item'); // 'li' 요소 생성 (각 제품을 리스트 아이템으로 렌더링)
    prodEl.innerHTML = ` 
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" > <!-- 제품 이미지를 표시하는 이미지 태그, alt 속성은 이미지가 로드되지 않을 경우 대체 텍스트 -->
          <div class="product-item__content">
            <h2>${this.product.title}</h2> <!-- 제품 타이틀을 표시하는 헤딩 태그 -->
            <h3>\$${this.product.price}</h3> <!-- 제품 가격을 표시하는 헤딩 태그 -->
            <p>${this.product.description}</p> <!-- 제품 설명을 표시하는 단락 태그 -->
            <button>Add to Cart</button> <!-- '장바구니에 추가' 버튼 -->
          </div>
        </div>
      `;
    const addCarButton = prodEl.querySelector("button"); //버튼 하나만 있는 스니펫에서 코드를 실행하고 해당 상품을 연결
    addCarButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl; // 생성된 'li' 요소를 반환
  }
}

class ProductList {
  // products 배열: Product 클래스의 객체들로 구성된 배열, 제품 정보가 미리 정의되어 있음
  products = [
    new Product(
      "A Pillow", // 첫 번째 제품: 베개
      "https://cafe24.poxo.com/ec01/bowell/bmDSdkGt1UpWFHtQqFtlQAt+lYMaNPj/919kk3gb/MRscTdOF7QeaToxLkkTEyKyjd3l9xVwhNg3ziyMcPjRYw==/_/web/product/big/202304/448147d821e9c8de299619e34f641cc9.jpg", // 베개 이미지 URL
      "A soft pillow!", // 베개에 대한 설명
      19.99 // 베개의 가격
    ),
    new Product(
      "A Carpet", // 두 번째 제품: 카펫
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg", // 카펫 이미지 URL
      "A carpet which you might like - or not.", // 카펫에 대한 설명
      89.99 // 카펫의 가격
    ),
  ];

  // 생성자 함수: 특별한 동작은 없고, products 배열이 이미 클래스 내부에 정의됨
  constructor() {}

  // render 함수: 전체 제품 리스트를 화면에 출력하는 역할
  render() {
    const renderHook = document.getElementById("app"); // 'app'이라는 ID를 가진 요소를 DOM에서 찾음, 이곳에 렌더링할 계획
    const prodList = document.createElement("ul"); // 'ul' 요소를 생성하여 제품 리스트를 묶을 컨테이너로 사용
    prodList.className = "product-list"; // 'ul' 요소에 스타일링을 위한 클래스 추가
    // products 배열에 있는 각 제품을 화면에 렌더링
    for (const prod of this.products) {
      const productItem = new ProductItem(prod); // 각 제품마다 새로운 ProductItem 객체 생성
      productItem.render();
    }
    return prodList;
  }
}

class Shop {
  render() {
    //cart와 productList결합
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart('app');
    const cartEl = this.cart.render();
    const productList = new ProductList(); // 새로운 ProductList 객체 생성
    const prodListEl = productList.render(); // ProductList 객체의 render 함수를 호출하여 제품 리스트를 화면에 출력

    renderHook.append(prodListEl);
  }
}

class App {//App호출할려면 init 메서드 사용
  static cart;

  static init() {
    const shop = new Shop();
    
    shop.render();
    this.cart=shop.cart;//정적 메서드를 app에서도 사용가능
  }
  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();






