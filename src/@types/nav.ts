export enum NavItem {
  workspaces = "workspaces",
  templates = "templates",
  users = "users",
  audit = "audit",
  deployment = "deployment"

}
export type NavMenu = {
  value: NavItem
  label: string
  path: string
}[]