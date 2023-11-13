def solution(polynomial):
    terms = polynomial.split(' + ')

    x = 0
    const = 0

    for term in terms:
        if 'x' in term:
            co = term.replace('x', '')
            if co == '':
                co = '1'
            x += int(co)
        else:
            const += int(term)

    result = ''
    if x > 0:
        if x == 1:
            result += 'x'
        else:
            result += str(x) + 'x'
    if const > 0:
        if result != '':
            result += ' + '
        result += str(const)

    return result
