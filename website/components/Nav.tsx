import React, { useMemo } from "react";
import { css, cx } from "@emotion/css";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { url: "/", label: "Simulator" },
  { url: "/about", label: "About" },
];

export const Nav = () => {
  const styles = useMemo(() => getStyles(), []);
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => {
          return (
            <li
              className={cx([
                styles.menuItem,
                {
                  [styles.menuItemActive]: isMenuItemActive(
                    router.asPath,
                    item.url
                  ),
                },
              ])}
              key={`${item.url}-${index}`}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

function isMenuItemActive(path: string, url: string) {
  return path === url;
}

const getStyles = () => {
  return {
    nav: css``,
    menu: css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0;
      margin: 0;
    `,
    menuItem: css`
      padding: 4px;
      margin: 8px;
      list-style: none;
      &:hover {
        background-color: #ddd;
      }
    `,
    menuItemActive: css`
      background-color: #ccc;
    `,
  };
};
