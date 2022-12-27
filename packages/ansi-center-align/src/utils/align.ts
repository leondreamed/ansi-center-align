import splitLines from 'split-lines'
import stringLength from 'string-length'

function alignText(
	val: string | string[],
	fn:
		| number
		| ((
				lineLength: number,
				maxLength: number,
				line: string,
				lines: string[],
				idx: number
		  ) => number | { character: string; indent: number; prefix: string })
) {
	let lines: string[]
	if (typeof val === 'string') {
		lines = splitLines(val)
	} else if (Array.isArray(val)) {
		lines = val
	} else {
		throw new TypeError('align-text expects a string or array.')
	}

	let maxLength = 0
	for (const line of lines) {
		maxLength = Math.max(maxLength, stringLength(line))
	}

	const len = lines.length
	let idx = -1
	const res = []

	while (++idx < len) {
		const line = String(lines[idx])
		let diff

		if (typeof fn === 'function') {
			diff = fn(stringLength(line), maxLength, line, lines, idx)
		} else if (typeof fn === 'number') {
			diff = fn
		} else {
			diff = maxLength - stringLength(line)
		}

		if (typeof diff === 'number') {
			res.push(' '.repeat(diff) + line)
		} else if (typeof diff === 'object') {
			const result = (diff.character || ' ').repeat(diff.indent || 0)
			res.push((diff.prefix || '') + result + line)
		}
	}

	if (Array.isArray(val)) return res
	return res.join('\n')
}

export function centerAlign(val: string | string[], width?: number) {
	if (
		typeof width === 'number' &&
		typeof val === 'string' &&
		!val.includes('\n')
	) {
		const padding = Math.floor((width - stringLength(val)) / 2)
		return (
			' '.repeat(Math.max(0, padding)) + val + ' '.repeat(Math.max(0, padding))
		)
	}

	return alignText(val, (len, longest) => {
		if (typeof width === 'number') {
			return Math.floor((width - len) / 2)
		}

		return Math.floor((longest - len) / 2)
	})
}
