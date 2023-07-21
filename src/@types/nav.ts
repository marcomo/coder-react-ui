export enum NavItem {
  workspaces = "workspaces",
  templates = "templates",
  users = "users",
  audit = "audit",
  deployment = "deployment"

}
export type NavMenu = {
  [key in NavItem]: {
    value: NavItem
    label: string
    path: string
  }
}