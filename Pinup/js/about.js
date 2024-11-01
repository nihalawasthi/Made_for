const terminal = document.getElementById('terminal');
        let commandHistory = [];
        let historyIndex = -1;

        terminal.addEventListener('keydown', function (event) {
            const input = document.querySelector('.input');

            if (event.key === 'Enter') {
                event.preventDefault();

                const command = input.innerText.trim();
                let output = '';

                if (command !== '') {
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;
                }

                switch (command.toLowerCase()) {
                    case 'experience':
                        window.open("https://www.linkedin.com/in/pranav-chaturvedi-1b31a8244");
                        break;
                    case 'contact':
                        output = '$ <span>Reach me at: PranavChaturvedi@gmail.com or visit my <a href="https://www.linkedin.com/in/pranav-chaturvedi-1b31a8244">LinkedIn profile.</a></span>';
                        break;
                    case 'pwd':
                        output = '$ <span>pre-final year</span>';
                        break;
                    case 'ls':
                        output = '$ <span>. .. bio.txt Projects</span>';
                        break;
                    case 'help':
                        output = '$ <span>pwd, ls, whoami, clear, cat, contact, exit, experience</span>';
                        break;
                    case 'cat bio.txt':
                        output = "$ <span>I'm Pranav Chaturvedi, a DevSecOps specializing in blockchain analysis, system administration, and reverse engineering.</span>";
                        break;
                    case 'whoami':
                        output = '$ <span>Pranav Chaturvedi</span>';
                        break;
                    case 'clear':
                        terminal.innerHTML = '<p>(user㉿HumerousFi)-[~] $ <span class="input" contenteditable="true"></span></p>';
                        terminal.querySelector('.input').focus();
                        return;
                    case 'exit':
                        terminal.innerHTML = '<p>(user㉿HumerousFi)-[~] $ <span class="input" contenteditable="true"></span></p>';
                        terminal.querySelector('.input').focus();
                        return;
                    default:
                        output = `$ <span>Command not recognized: ${command}</span>`;
                }

                const commandLine = document.createElement('p');
                commandLine.innerHTML = `(user㉿HumerousFi)-[~] $ <span>${command}</span>`;
                terminal.insertBefore(commandLine, input.parentElement);

                if (output) {
                    const outputLine = document.createElement('p');
                    outputLine.innerHTML = output;
                    terminal.insertBefore(outputLine, input.parentElement);
                }

                input.innerText = '';

                terminal.appendChild(input.parentElement);

                input.focus();

                terminal.scrollTop = terminal.scrollHeight;
            }

            if (event.key === 'ArrowUp') {
                if (historyIndex > 0) {
                    historyIndex--;
                    input.innerText = commandHistory[historyIndex];
                    placeCaretAtEnd(input);
                }
            }

            if (event.key === 'ArrowDown') {
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    input.innerText = commandHistory[historyIndex];
                    placeCaretAtEnd(input);
                } else {
                    historyIndex = commandHistory.length;
                    input.innerText = '';
                }
            }
        });

        terminal.addEventListener('click', function () {
            const input = document.querySelector('.input');
            input.focus();
        });

        function placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }
        }