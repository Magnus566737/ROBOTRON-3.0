  // --- CART HELPERS (shared idea: localStorage) ---
  const CART_KEY = 'robotronCart';

  function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return []; } }
  function saveCart(items){ localStorage.setItem(CART_KEY, JSON.stringify(items)); }

  function addToCart(item){
    const cart = getCart();
    // if category exists, increment qty; otherwise push
    const idx = cart.findIndex(x => x.category === item.category);
    if (idx > -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({...item, quantity: 1});
    }
    saveCart(cart);
  }

  // --- Hook up buttons on categories ---
  $(function(){
    $('.add-to-cart').on('click', function(){
      const category = $(this).data('category');
      const fee = Number($(this).data('fee') || 0);
      addToCart({ category, fee });

      // Optional toast/feedback
      const $btn = $(this);
      $btn.text('Added ✓').prop('disabled', true);
      setTimeout(() => { $btn.text('Add to Registration').prop('disabled', false); }, 1200);

      // Direct to registration page (uncomment if you want instant redirect)
      // window.location.href = 'registration.html';
    });
  });
