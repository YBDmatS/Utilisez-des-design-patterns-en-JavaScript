class ProxyRatingSorter {
  constructor() {
    this.cache = [];
  }

  async sorter(data, orderBy) {
    const cachedResult = this.cache.find((item) => item.key === orderBy);

    if (cachedResult) {
      console.log("Get from cache");
      return cachedResult;
    }

    return RatingSorterApi.sorter(data, orderBy).then((result) => {
      this.cache.push({ key: orderBy, data: result.data });
      return result;
    });
  }
}
