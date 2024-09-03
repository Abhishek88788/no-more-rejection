# ❤️ No More Rejection: The Ultimate Prank Page

Welcome to the No More Rejection Prank Page! Here, you’ll find a playful and interactive experience where rejection is not an option—literally! This page asks, "Do You Love Me?" with two buttons—Yes and No. But there's a catch: the "No" button is a runaway, so the answer is always a resounding "YES!"

## 🎉 Project Highlights
- **Catch Me If You Can**: The "No" button will dodge your clicks, making it impossible to reject the love!
- **Simple & Fun Layout**: A straightforward design that’s easy to modify and even easier to love.
- **Endless Customization**: Tweak the text, styles, and button behavior to make it uniquely yours.

## 🚀 Getting Started
Getting started with this project is as easy as saying "Yes!"

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/yourusername/no-more-rejection.git
    cd no-more-rejection
    ```

2. Open the project in your favorite code editor.
3. Launch the page by opening `index.html` in your browser.

Now, watch your friends try (and fail) to reject you. 😜

## 🎨 Make It Your Own
This project is built to be a breeze to customize. Here’s how you can make it truly yours:

- **Change the Question**: Don’t like "Do You Love Me?" No problem! Make it "Will You Be My Friend?" or "Do You Like Pizza?"—whatever suits your style. Just update the `<h1>` in `index.html`. You can view and edit it directly on GitHub [here](https://github.com/yourusername/no-more-rejection/blob/main/index.html#L7).

    ```html
    <h1>Do You Like Adventures?</h1>
    ```

- **Customize the Buttons**: Want to change the "Yes" and "No" to something more creative? Go for it! Edit the button labels directly in the `index.html` file.

    ```html
    <button id="yesButton">Absolutely!</button>
    <button id="noButton">No Way!</button>
    ```

- **Spice Up the Alert Message**: The alert message when clicking "Yes" has been updated to be more fun and engaging. You can view and edit the JavaScript section directly on GitHub [here](https://github.com/yourusername/no-more-rejection/blob/main/script.js#L3).

    ```javascript
    alert('🎉 Woohoo! You made the right choice! ❤️');
    ```

    Feel free to change the text or add your own emojis to match your theme!

- **Revamp the Look**: Dive into `styles.css` to switch up the colors, fonts, and overall vibe. You can view and edit the CSS section directly on GitHub [here](https://github.com/yourusername/no-more-rejection/blob/main/styles.css#L1).

    ```css
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 30px;
        text-align: center;
    }

    .container {
        display: flex;
        gap: 30px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;   
        cursor: pointer;
    }

    #noButton {
        transition: all 0.5s ease;
    }
    ```

- **Hack the Button’s Escape Plan**: The "No" button’s runaway behavior is coded in `script.js`. You can view and edit the JavaScript section directly on GitHub [here](https://github.com/yourusername/no-more-rejection/blob/main/script.js#L10).

    ```javascript
    // Move the "No" button to a random position when hovered over
    noButton.addEventListener('mouseover', () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
    ```

## 🌟 Live Demo
See the magic in action! Check out the live demo [here](link-to-live-demo).

## 📱 Limitations
- **Mobile Devices**: The "No" button's behavior may vary on touchscreens, potentially affecting the user experience. For the best experience, it's recommended to view and interact with this project on a desktop or laptop.

## 🙌 Join the Fun
This project is all about saying "Yes" to collaboration! Here’s how you can get involved:
- **Fork it**: Have a brilliant idea? Fork the repo and make it happen. Then, send a pull request my way!
- **Share Your Thoughts**: Got feedback or a feature request? Drop an issue in the repo.
- **Let’s Collaborate**: I’m all about teamwork! Let’s create something fun and irresistible together.

## 📜 License to Love
This project is licensed under the MIT License—meaning you can love it, share it, and remix it to your heart’s content. Check out the LICENSE file for the full scoop.
