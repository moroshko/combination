import { expect } from 'chai';
import { getCombinations } from '../src';

describe('getCombinations', () => {
  it('should generate combinations', () => {
    const input = [
      {
        width: [320, 760, 1200]
      },
      {
        page: {
          homepage: [
            {
              isDashboardOpen: [false, true]
            }
          ],
          searchResults: [
            {
              areRefinementsOpen: [false, true]
            },
            {
              isZeroResults: [false, true]
            }
          ]
        }
      }
    ];

    const output = [
      { width: 320, page: 'homepage', isDashboardOpen: false },
      { width: 320, page: 'homepage', isDashboardOpen: true },
      { width: 320, page: 'searchResults', areRefinementsOpen: false, isZeroResults: false },
      { width: 320, page: 'searchResults', areRefinementsOpen: false, isZeroResults: true },
      { width: 320, page: 'searchResults', areRefinementsOpen: true, isZeroResults: false },
      { width: 320, page: 'searchResults', areRefinementsOpen: true, isZeroResults: true },

      { width: 760, page: 'homepage', isDashboardOpen: false },
      { width: 760, page: 'homepage', isDashboardOpen: true },
      { width: 760, page: 'searchResults', areRefinementsOpen: false, isZeroResults: false },
      { width: 760, page: 'searchResults', areRefinementsOpen: false, isZeroResults: true },
      { width: 760, page: 'searchResults', areRefinementsOpen: true, isZeroResults: false },
      { width: 760, page: 'searchResults', areRefinementsOpen: true, isZeroResults: true },

      { width: 1200, page: 'homepage', isDashboardOpen: false },
      { width: 1200, page: 'homepage', isDashboardOpen: true },
      { width: 1200, page: 'searchResults', areRefinementsOpen: false, isZeroResults: false },
      { width: 1200, page: 'searchResults', areRefinementsOpen: false, isZeroResults: true },
      { width: 1200, page: 'searchResults', areRefinementsOpen: true, isZeroResults: false },
      { width: 1200, page: 'searchResults', areRefinementsOpen: true, isZeroResults: true }
    ];

    expect(getCombinations(input)).to.deep.equal(output);
  });
});
