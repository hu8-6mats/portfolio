# portfolio

## Overview

## How to build the environment

1. **Build images & Launch Containers**

    ```console
    cd portfolio

    docker compose up --build
    ```

2. **Check running containers**

    ```console
    docker ps --all
    ```

3. **Build the backend vurtual environment**

    The following operations are performed so that the library can be recognized in the local environment.

    ```console
    cd portfolio/backend

    python3 -m venv .venv
    source .venv/bin/activate

    pip install -r requirements.txt
    ```

4. **Start the frontend environment**

    ```console
    cd portfolio/frontend

    npm run dev
    ```

5. **Verify that localhost is accessible**

    | Server   | Port                                    |
    | :------- | :-------------------------------------- |
    | Frontend | [localhost:3000](http://localhost:3000) |
    | Backend  | [localhost:8000](http://localhost:8000) |
    | Mail     | [localhost:8025](http://localhost:8025) |
    | Database | [localhost:5050](http://localhost:5050) |

## Product architectures

### Frontend

---

The frontend is developed using the Next.js framework.  
The version information is below.

|            |        |
| :--------- | :----- |
| Next.js    | 14.2.5 |
| React      | 18.3.1 |
| TypeScript | 5.5.4  |

---

The directory structure is as follows.

|                  |                                    |
| :--------------- | :--------------------------------- |
| `node_modules`   | Project dependencies               |
| `public`         | Static assets, initial settings    |
| `src/`           | Source code                        |
| ├── `app`        | Directory for routing and layouts  |
| ├── `components` | Reusable UI elements, common parts |

1. Layout

    要素の配置やフレキシビリティを管理する

    - display
    - flex
    - justify-content
    - align-items
    - grid

2. Color

    要素の視覚的なスタイルを設定する

    - color
    - background
    - opacity

3. Typography

    テキストの見た目を調整する

    - font-family
    - font-size
    - font-weight
    - line-height
    - letter-spacing
    - text-align
    - text-transform

4. Sizing

    要素のサイズと間隔を制御する

    - width
    - height
    - padding
    - margin
    - border

5. Positioning

    要素の位置を調整する

    - position
    - top, right, bottom, left
    - z-index

6. Decoration

    要素の視覚的な装飾を管理する

    - border-radius
    - box-shadow
    - text-shadow
    - list-style
    - outline

7. Animation

    要素の動きを管理する

    - transition
    - animation
