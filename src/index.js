function isLiteral(thing) {
  const type = typeof thing;

  return type === 'boolean' || type === 'number' || type === 'string';
}

function getKey(obj) {
  for (const key in obj) {
    return key;
  }

  return null;
}

function hasMultipleKeys(obj) {
  let count = 0;

  for (const key in obj) { // eslint-disable-line no-unused-vars
    if (++count === 2) {
      return true;
    }
  }

  return false;
}

function getCombinationsRec(input) {
  if (isLiteral(input)) {
    return input;
  }

  if (Array.isArray(input)) {
    return input.map(getCombinationsRec).reduce((finalResult, nextCombinations) => {
      if (finalResult.length === 0) {
        return [ ...nextCombinations ];
      }

      return finalResult.reduce((result, finalResultCombination) => {
        return result.concat(nextCombinations.map(nextCombination => {
          return {
            ...finalResultCombination,
            ...nextCombination
          };
        }));
      }, []);
    }, []);
  }

  if (hasMultipleKeys(input)) {
    throw new Error('Input object cannot have multiple keys');
    return;
  }

  const key = getKey(input);
  const value = input[key];

  if (Array.isArray(value)) {
    return value.reduce((result, item) => {
      if (!isLiteral(item)) {
        throw new Error('Item must be literal');
        return result;
      }

      return result.concat({ [key]: item });
    }, []);
  }

  return Object.keys(value).reduce((result, valueKey) => {
    return result.concat(getCombinationsRec(value[valueKey]).map(combination => {
      return {
        [key]: valueKey,
        ...combination
      };
    }));
  }, []);
}

export function getCombinations(input) {
  try {
    return getCombinationsRec(input);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    return null;
  }
}
