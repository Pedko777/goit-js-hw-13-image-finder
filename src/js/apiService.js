import axios from 'axios';
// basicURL: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,

const api = {
  apiKey: '15374361-4cc1c871c88fd85287a24e6ed',
  searchQuery: '',
  page: 1,

  async getImage() {
    const res = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    );
    this.page += 1;
    return res.data.hits;
  },
};

export default api;
