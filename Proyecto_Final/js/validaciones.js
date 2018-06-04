$(document).ready(function() {
  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 4,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your last name'
                  }
              }
          },
          username: {
              validators: {
                      stringLength: {
                      min: 6,
                  },
                      notEmpty: {
                      message: 'Please enter a username'
                  }
              }
          },
          password: {
              validators: {
                      stringLength: {
                      min: 6,
                  },
                      notEmpty: {
                      message: 'Please enter a password'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          phone: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your phone number'
                  },
                  phone: {
                      country: 'US',
                      message: 'Please supply a vaild phone number with area code'
                  }
              }
          },
          card: {
              validators: {
                  notEmpty: {
                      message: 'Please supply a Credit Card Number'
                  },
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
          },
          cvvNumber: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a CVV number'
                    },
                    cvv: {
                        creditCardField: 'card',
                        message: 'The CVV number is not valid'
                    }
                }
            },
            expiry: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply a Expiry Date'
                      },
                      regexp: {
                        regexp: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                        message: 'The Expiry Date is not valid'
                    }
                  }
              },

          address: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please supply your street address'
                  }
              }
          },

          cardName: {
              validators: {
                   stringLength: {
                      min: 10,
                  },
                  notEmpty: {
                      message: 'Please supply the Card Holder Name'
                  }
              }
          },
          city: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your city'
                  }
              }
          },
          type: {
              validators: {
                  notEmpty: {
                      message: 'Please select your Cart Type'
                  }
              }
          },
          state: {
              validators: {
                  notEmpty: {
                      message: 'Please select your state'
                  }
              }
          },
          zip: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your zip code'
                  },
                  zipCode: {
                      country: 'US',
                      message: 'Please supply a vaild zip code'
                  }
              }
          },
      }
  })

      .on('success.form.bv', function(e) {
          location.href="Bill.html"
          e.preventDefault();

      });
});

$(document).ready(function() {
  $('#contact_form2').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Please supply your last name'
                  }
              }
          },
          username: {
              validators: {
                      stringLength: {
                      min: 6,
                  },
                      notEmpty: {
                      message: 'Please enter a username'
                  }
              }
          },
          password: {
              validators: {
                      stringLength: {
                      min: 6,
                  },
                      notEmpty: {
                      message: 'Please enter a password'
                  }
              }
          },
          confirmPassword: {
              validators: {
                      notEmpty: {
                      message: 'Please enter a password'
                  },
                      identical: {
                          field: 'password',
                          message: "The passwords doesn't match"
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          phone: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your phone number'
                  },
                  phone: {
                      country: 'US',
                      message: 'Please supply a vaild phone number with area code'
                  }
              }
          },
          address: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please supply your street address'
                  }
              }
          },
          city: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your city'
                  }
              }
          },
          state: {
              validators: {
                  notEmpty: {
                      message: 'Please select your state'
                  }
              }
          },
          zip: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your zip code'
                  },
                  zipCode: {
                      country: 'US',
                      message: 'Please supply a vaild zip code'
                  }
              }
          },
      }
  })
      .on('success.form.bv', function(e) {
          location.href="Home.html"
          e.preventDefault();

      });
});

$(document).ready(function() {
  $('#contact_form3').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 4,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your last name'
                  }
              }
          },
          username: {
              validators: {
                      stringLength: {
                      min: 6,
                  },
                      notEmpty: {
                      message: 'Please enter a username'
                  }
              }
          },
          password: {
              validators: {
                      stringLength: {
                      min: 6,
                  },
                      notEmpty: {
                      message: 'Please enter a password'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          phone: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your phone number'
                  },
                  phone: {
                      country: 'US',
                      message: 'Please supply a vaild phone number with area code'
                  }
              }
          },
          card: {
              validators: {
                  notEmpty: {
                      message: 'Please supply a Credit Card Number'
                  },
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
          },
          cvvNumber: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a CVV number'
                    },
                    cvv: {
                        creditCardField: 'card',
                        message: 'The CVV number is not valid'
                    }
                }
            },
            expiry: {
                  validators: {
                      notEmpty: {
                          message: 'Please supply a Expiry Date'
                      },
                      regexp: {
                        regexp: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                        message: 'The Expiry Date is not valid'
                    }
                  }
              },

          address: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please supply your street address'
                  }
              }
          },

          cardName: {
              validators: {
                   stringLength: {
                      min: 10,
                  },
                  notEmpty: {
                      message: 'Please supply the Card Holder Name'
                  }
              }
          },
          city: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your city'
                  }
              }
          },
          type: {
              validators: {
                  notEmpty: {
                      message: 'Please select your Cart Type'
                  }
              }
          },
          state: {
              validators: {
                  notEmpty: {
                      message: 'Please select your state'
                  }
              }
          },
          zip: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your zip code'
                  },
                  zipCode: {
                      country: 'US',
                      message: 'Please supply a vaild zip code'
                  }
              }
          },
      }
  })

      .on('success.form.bv', function(e) {
          $('#saveModal').modal('show');
          e.preventDefault();

      });
});
