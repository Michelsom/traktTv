import { OrderCreated, ReceivedCart, Transaction } from './Cart';
import { Cart } from './Models_Commands/Cart';
import { Category } from './Product';

export interface Store {
  commands: InitialMethodCommands;
  cart: CartInitialStore;
  seller: SellerInitial;
  orders: OrdersInitialStore;
  merchant: Merchant;
  products: InitialProducts;
  settings: InitialSettings;
}
export interface InitialMethodCommands {
  entryMethod: Entry | undefined;
}
export interface OrdersInitialStore {
  failedOrders: OrderCreated[];
  sendingOrders: OrderCreated[];
  reportOrders: ReceivedCart[];
  lastOrder: OrderCreated | undefined;
  qttFailedOrders: number;
  qttSendOrders: number;
}

export interface InitialSettings {
  configPdv: ConfigPdv | undefined;
  merchantCommerce: MerchantCommerce | undefined;
  autoUpdate: boolean;
  localPassword: string | undefined;
  cashSale: boolean;
  printClient: boolean;
  printStore: boolean;
}
export interface ConfigPdv {
  imageDisplay: boolean;
  viewMode: string;
  disableDescription: boolean;
  pdvDevice: PdvDevice;
}
export interface PdvDevice {
  serial: string;
  status: number;
  model: string;
}
export interface MerchantCommerce {
  merchant: {
    name: string;
  };
  image: string;
  merchantAddress: {
    name: string;
  };
  configurationMerchantCommerce: ConfigurationMerchantCommerce;
  pdvImage: string;
  pdvImage64: string;
}
export interface ConfigurationMerchantCommerce {
  textInfo: string;
  autoUpdateProducts: boolean;
  title: string;
  slots: number;
  pdvTypes: PdvType[];
  disableSellerInUse: boolean;
  status: boolean;
}
export interface PdvType {
  name: string;
}
export interface CartInitialStore {
  cart?: Cart | null;
  localCart: Product[] | null;
  subTotalCart: number | null;
  transactions: Transaction[];
  loadingCart: boolean;
}
export interface CartCommands {
  cart: Cart | null;
  subTotalCart: number | null;
}
export interface SellerInitial {
  seller: Seller | undefined;
}
export interface EntryMethodCommands {
  entryMethod: string;
}
export interface Seller {
  id: number;
  name: string;
  sessionId: string;
  createAt: string;
}
export interface Entry {
  EntryMethod: string;
}
export interface InitialProducts {
  loadingProducts: boolean;
  loadingCategories: boolean;
  products: Product[] | undefined;
  categories: Category[] | undefined;
}
export interface Product {
  id: number;
  price: number;
  quantity: number;
  name?: string;
  categoryId?: number;
}
export interface Merchant {
  merchant: string;
}

export interface configPdv {
  imageDisplay: Boolean;
  viewMode: string;
  disableDescription: Boolean;
  pdvDevice: pdvDevice;
}

export interface pdvDevice {
  serial: string;
  status: number;
  model: string;
}
export interface merchantCommerce {
  merchant: { name: string };
  image: string;
  merchantAddress: { name: string };
  configurationMerchantCommerce: {
    textInfo: string;
    autoUpdateProducts: boolean;
  };
  pdvImage64: string;
}
