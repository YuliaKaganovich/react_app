import cls from "./MainLayout.module.css"

export const MainLayout = () => {
  return (
      <div className={cls.mainLayout}>
          <header>header</header>
          <div>
              <main>main</main>
              <footer>footer</footer>
          </div>
    </div>
  )
}

