<template>
  <div id="supplier-edit">
    <h1 class="text-primary">
      Modifier le fournisseur n° {{ $route.params.id }}
    </h1>
    <SupplierForm
      :data="editSupplierData"
      :action="action"
      v-model="editSupplierData"
      @formSubmit="editSupplier($route.params.id)"
    />
  </div>
</template>

<script>
import SupplierForm from '../../components/Forms/SupplierForm';

export default {
  name: 'EditSupplier',
  components: {SupplierForm},
  data() {
    return {
      editSupplierData: {
        company: '',
        adress: '',
        postcode: '',
        city: '',
        country: '',
        phone: '',
        iban: '',
        swift_bic: '',
        account: '',
      },
      rawPhone: '',
      action: 'MODIFIER',
    };
  },
  methods: {
    getSupplier: async function(id) {
      this.$http.get(`${rootURL}suppliers/${id}`).then(
        response => {
          //Pas le même format qu'avec les factures oO
          this.editSupplierData = response.body;
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    },
    editSupplier: async function(id) {
      this.editSupplierData.phone = this.cleanPhone;
      const data = this.editSupplierData;
      return this.$http.put(`${rootURL}suppliers/${id}`, data).then(
        response => {
          this.$router.go(-1);
          alert('Le fournisseur a bien été modifié');
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    },
  },
  created() {
    this.getSupplier(this.$route.params.id);
  },
  computed: {
    cleanPhone: function() {
      if (this.editSupplierData.phone) {
        this.rawPhone = this.editSupplierData.phone;
        return this.rawPhone.replace(/ /g, '');
      } else {
        return this.editSupplierData.phone;
      }
    },
  },
};
</script>
