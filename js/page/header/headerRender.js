class Header {
    render() {
        let html = `
            <div class="wrapper">
                <div class="header__wrap">
                    <div class="header__burger">
                        <div class="header__burger-line"></div>
                        <div class="header__burger-line"></div>
                        <div class="header__burger-line"></div>
                    </div>
                    <div class="logo">
                        <div class="logo__text">
                            <img src="img/logo/logo_text.svg" alt="logo_text" class="img logo__text-item">
                        </div>
                        <div class="logo__img">
                            <img src="img/logo/logo_img.svg" alt="logo_img" class="img logo__img-item">
                        </div>
                    </div>
                    <nav class="navigation header__navigation">
                        <ul class="navigation__list">
                            <li data-dropdown='node' class="navigation__node" id="menu-node">
                                <a data-dropdown='link' href="#" class="navigation__link navigation__link_dropdown" id="menu-btn">Меню</a>
                            </li>
                            <ul data-dropdown='menu' class="navigation__dropdown header__dropdown"  id="menu-dropdown">
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/01.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Cупы</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/02.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Хачапури</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/03.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Холодные закуски</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/04.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Хинкали</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/05.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Шашлык</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/06.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Соусы</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/07.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Салаты</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/08.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Горячие блюда</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/09.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Гарнир</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/10.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Десерты</div>
                                    </a>
                                </li>
                                <li class="navigation__dropdown-node header__dropdown-node">
                                    <a href="#" class="navigation__dropdown-link">
                                        <div class="navigation__dropdown-img">
                                            <img src="img/header/drop-down-menu/11.png" alt="menu_icon" class="navigation__dropdown-icon">
                                        </div>
                                        <div class="navigation__dropdown-text header__dropdown-text">Напитки</div>
                                    </a>
                                </li>
                            </ul>
                            <li class="navigation__node" id="menu-node">
                                <a href="#" class="navigation__link" id="menu-btn">Доставка</a>
                            </li>
                            <li class="navigation__node" id="menu-node">
                                <a href="#" class="navigation__link" id="menu-btn">Оплата</a>
                            </li>
                            <li class="navigation__node" id="menu-node">
                                <a href="#" class="navigation__link table__btn_pop-up" id="menu-btn">Бронь стола</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header__buttons">
                        <div class="header__tel">
                            <a href="tel:+78312826000" class="header__tel-link">
                                <div class="header__tel-icon">
                                    <img class="img" src="img/header/phone.svg" alt="phone">
                                </div>
                                <span class="header__tel-number">+7 (831) 282-60-00</span>
                            </a>
                        </div>
                        <div class="header__user">
                            <button id="user_sign_in" class="header__user-btn btn">
                                <img class="img" src="img/header/person.svg" alt="person">
                            </button>
                            <a class="header__basket-btn basket-cart" href="store.html">
                                <img class="img" src="../../img/shopping_cart/shopping_cart_green.svg" alt="basket">
                                <span class="header__basket-amount basket-cart__amount">5</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `    
        HEADER.innerHTML = html
    }
}
const headerHTML = new Header()
headerHTML.render()