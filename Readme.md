# live-hmr-docker

A sample React + Node App containerized with Docker, demonstrating real-time changes reflected during development.

## Getting Started

Follow these steps to get the project running with Docker Compose:

### Prerequisites

*   Docker Engine
*   Docker Compose
*   Git

### Cloning the Repository

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/live-hmr-docker.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd live-hmr-docker
    ```

### Running with Docker Compose

1.  From the project root, build the Docker images for both frontend and backend services:

    ```bash
    docker compose build
    ```

2.  Start the containers in detached mode:

    ```bash
    docker compose up -d
    ```

    *   **Frontend Address:**  `http://localhost:5173`
    *   **Backend Address:**  `http://localhost:3100`
    &nbsp;
    Any changes you make to the source code in the `frontend` or `server` directories on your machine should be reflected in the running containers in real-time due to the configured volumes.

    &nbsp;
3.  Stopping the containers and removing them:

    ```bash
    docker compose down
    ```

**How the Applications Run:**

*   **Frontend:** The frontend container runs the command specified in its Dockerfile's `CMD` instruction, which in your case is likely `npm run dev-exposed`.
*   **Backend:** The backend container runs the command specified in its Dockerfile's `CMD` instruction, which is `npm run dev`.