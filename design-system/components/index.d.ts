// Gank components are plain HTML classes (gk-*) styled by bundle.css.
// bundle.js registers window.Gank with behaviour helpers; markup is documented per component.
export interface ButtonProps { variant?: 'default' | 'cta' | 'brand' | 'ghost'; size?: 'default' | 'sm'; block?: boolean; disabled?: boolean }
export interface InputProps { label: string; help?: string; placeholder?: string; multiline?: boolean }
export interface ToggleProps { checked: boolean; title: string; description?: string }
export interface TabsProps { tabs: { label: string; badge?: string }[]; selected: number }
export interface SegmentedProps { options: string[]; selected: number; style?: 'seg' | 'chips' }
export interface SidebarProps { items: { label: string; icon: string; current?: boolean; children?: string[] }[]; showUpgrade?: boolean }
export interface PanelProps { title: string; action?: ButtonProps }
export interface StatProps { value: string; unit: string; tone?: 'green' | 'purple' | 'blue' }
export interface TableProps { columns: string[]; rows: string[][] }
export interface StatusProps { kind: 'ok' | 'off' | 'neutral'; label: string }
export interface AlertProps { tone?: 'neutral' | 'info'; message: string; action?: string; dismissible?: boolean }
export interface EmptyStateProps { message: string; action?: string }
export interface TipPanelProps { currency: 'IDR' | 'USD'; presets: string[] }
export interface ListingCardProps { title: string; price: string; localPrice: string; type: string; active: boolean }
export interface PostCardProps { author: string; when: string; title: string; locked?: boolean; mediaCount?: { images?: number; videos?: number }; likes?: number }
export interface ChartProps { title: string; value: string; unit?: string; points: number[]; labels: string[] }
export interface QuickActionsProps { items: { label: string; emoji: string; href: string }[] }
export interface PagerProps { page: number; pages: number; pageSize: 10 | 25 | 50 }
export interface SubscriptionCardProps { creator: string; tier: string; status: 'active' | 'expired'; renewal: string; period: string; lastPaid: string; price: string; action?: string }
export interface NotificationItemProps { actor: string; message: string; when: string; kind: 'listing' | 'post' }
export interface UploadProps { label: string; hint: string }
export interface SliderProps { label: string; min: number; max: number; value: number }
export interface ProfileHeaderProps { creator: string; verified?: boolean; tabs: string[]; current: string; action: string }
export interface FooterProps { year: number }
export declare const Gank: {
  toggle(el: HTMLElement): HTMLElement;
  tabs(strip: HTMLElement): HTMLElement;
  segmented(seg: HTMLElement): HTMLElement;
  slider(input: HTMLInputElement): HTMLInputElement;
  init(root?: ParentNode): void;
};
declare global { interface Window { Gank: typeof Gank } }
