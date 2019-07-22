export class SearchService {

  private result = [
    'Linux Application',
    'Windows Application'
  ];

  getResults(searchText: string): Promise<string[]> {
    const results = [];

    for (let i = 0; i < searchText.length; i++) {
      const result1 = this.result[0] + ' ' + i;
      const result2 = this.result[1] + ' ' + i;

      results.push(result1);
      results.push(result2);
    }

    return Promise.resolve(results);
  }

}