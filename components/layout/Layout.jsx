import MainNavigation from './MainNavigation'

export default function Layout({ children }) {
  return (
    <>
      <MainNavigation>
      </MainNavigation>
      <main>{children}</main>
    </>
  )
}
