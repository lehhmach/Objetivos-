function createCountdown(targetDate, elementId) {
      const countDate = new Date(targetDate).getTime();

        function updateTimer() {
            const now = new Date().getTime();
                const distance = countDate - now;

                    if (distance < 0) {
                          document.getElementById(elementId).innerHTML = "🎉 Objetivo alcançado!";
                                return;
                                    }

                                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                                        document.getElementById(elementId).innerHTML =
                                                              `${days}d ${hours}h ${minutes}m ${seconds}s`;
                                                                }

                                                                  updateTimer();
                                                                    setInterval(updateTimer, 1000);
                                                                    }

                                                                    createCountdown("December 1, 2026 00:00:00", "timer1");
                                                                    createCountdown("December 1, 2032 00:00:00", "timer2");
                                                                    createCountdown("December 1, 2035 00:00:00", "timer3");
                                                                    createCountdown("December 1, 2036 00:00:00", "timer4");
