namespace blinkTest {
	/**
	 * Blinks the LED on the Micro:bit
	 * @param duration The duration of the blink in ms.
         */
	//% block = "Blink LED for %duration|ms"
	export function blinkLED(duration: number): void {
		led.toggle(0,0);
		basic.pause(duration);
		led.toggle(0,0);
	}
}

