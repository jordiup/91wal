import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
  namespace Schemas {
    /**
     * Provides information about an Up bank account.
     * 
     */
    export interface AccountResource {
      /**
       * The type of this resource: `accounts`
       */
      type: string;
      /**
       * The unique identifier for this account.
       * 
       */
      id: string;
      attributes: {
        /**
         * The name associated with the account in the Up application.
         * 
         */
        displayName: string;
        /**
         * Specifies the type of bank account. Currently returned values are `SAVER`
         * and `TRANSACTIONAL`.
         * 
         */
        accountType: "SAVER" | "TRANSACTIONAL";
        /**
         * Provides information about a value of money.
         * 
         */
        balance: {
          /**
           * The ISO 4217 currency code.
           * 
           */
          currencyCode: string;
          /**
           * The amount of money, formatted as a string in the relevant currency.
           * For example, for an Australian dollar value of $10.56, this field will
           * be `"10.56"`. The currency symbol is not included in the string.
           * 
           */
          value: string;
          /**
           * The amount of money in the smallest denomination for the currency, as a
           * 64-bit integer.  For example, for an Australian dollar value of $10.56,
           * this field will be `1056`.
           * 
           */
          valueInBaseUnits: number;
        };
        /**
         * The date-time at which this account was first opened.
         * 
         */
        createdAt: string; // date-time
      };
      relationships: {
        transactions: {
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
      };
      links?: {
        /**
         * The canonical link to this resource within the API.
         * 
         */
        self: string;
      };
    }
    /**
     * Specifies the type of bank account. Currently returned values are `SAVER`
     * and `TRANSACTIONAL`.
     * 
     */
    export type AccountTypeEnum = "SAVER" | "TRANSACTIONAL";
    /**
     * Provides information about an instant reimbursement in the form of
     * cashback.
     * 
     */
    export interface CashbackObject {
      /**
       * A brief description of why this cashback was paid.
       * 
       */
      description: string;
      /**
       * Provides information about a value of money.
       * 
       */
      amount: {
        /**
         * The ISO 4217 currency code.
         * 
         */
        currencyCode: string;
        /**
         * The amount of money, formatted as a string in the relevant currency.
         * For example, for an Australian dollar value of $10.56, this field will
         * be `"10.56"`. The currency symbol is not included in the string.
         * 
         */
        value: string;
        /**
         * The amount of money in the smallest denomination for the currency, as a
         * 64-bit integer.  For example, for an Australian dollar value of $10.56,
         * this field will be `1056`.
         * 
         */
        valueInBaseUnits: number;
      };
    }
    /**
     * Provides information about a category and its ancestry.
     * 
     */
    export interface CategoryResource {
      /**
       * The type of this resource: `categories`
       */
      type: string;
      /**
       * The unique identifier for this category. This is a human-readable but
       * URL-safe value.
       * 
       */
      id: string;
      attributes: {
        /**
         * The name of this category as seen in the Up application.
         * 
         */
        name: string;
      };
      relationships: {
        parent: {
          data: {
            /**
             * The type of this resource: `categories`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          } | null;
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
        children: {
          data: {
            /**
             * The type of this resource: `categories`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          }[];
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
      };
      links?: {
        /**
         * The canonical link to this resource within the API.
         * 
         */
        self: string;
      };
    }
    /**
     * Request to create a new webhook. This currently only requires a `url`
     * attribute.
     * 
     */
    export interface CreateWebhookRequest {
      /**
       * Represents a webhook specified as request input.
       * 
       */
      data: {
        attributes: {
          /**
           * The URL that this webhook should post events to. This must be a valid
           * HTTP or HTTPS URL that does not exceed 300 characters in length.
           * 
           */
          url: string; // uri
          /**
           * An optional description for this webhook, up to 64 characters in
           * length.
           * 
           */
          description?: string | null;
        };
      };
    }
    /**
     * Successful response after creating a webhook.
     * 
     */
    export interface CreateWebhookResponse {
      /**
       * Provides information about a webhook.
       * 
       */
      data: {
        /**
         * The type of this resource: `webhooks`
         */
        type: string;
        /**
         * The unique identifier for this webhook.
         * 
         */
        id: string;
        attributes: {
          /**
           * The URL that this webhook is configured to `POST` events to.
           * 
           */
          url: string;
          /**
           * An optional description that was provided at the time the webhook was
           * created.
           * 
           */
          description: string | null;
          /**
           * A shared secret key used to sign all webhook events sent to the
           * configured webhook URL. This field is returned only once, upon the
           * initial creation of the webhook. If lost, create a new webhook and
           * delete this webhook.
           * 
           * The webhook URL receives a request with a
           * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
           * the entire raw request body signed using this `secretKey`. It is
           * advised to compute and check this signature to verify the
           * authenticity of requests sent to the webhook URL. See
           * [Handling webhook events](#callback_post_webhookURL) for full
           * details.
           * 
           */
          secretKey?: string;
          /**
           * The date-time at which this webhook was created.
           * 
           */
          createdAt: string; // date-time
        };
        relationships: {
          logs: {
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
        };
        links?: {
          /**
           * The canonical link to this resource within the API.
           * 
           */
          self: string;
        };
      };
    }
    /**
     * Provides information about an error processing a request.
     * 
     */
    export interface ErrorObject {
      /**
       * The HTTP status code associated with this error. This can also be
       * obtained from the response headers. The status indicates the broad type
       * of error according to HTTP semantics.
       * 
       */
      status: string;
      /**
       * A short description of this error. This should be stable across
       * multiple occurrences of this type of error and typically expands on the
       * reason for the status code.
       * 
       */
      title: string;
      /**
       * A detailed description of this error. This should be considered unique
       * to individual occurrences of an error and subject to change. It is
       * useful for debugging purposes.
       * 
       */
      detail: string;
      /**
       * If applicable, location in the request that this error relates to. This
       * may be a parameter in the query string, or a an attribute in the
       * request body.
       * 
       */
      source?: {
        /**
         * If this error relates to a query parameter, the name of the
         * parameter.
         * 
         */
        parameter?: string;
        /**
         * If this error relates to an attribute in the request body, a
         * rfc-6901 JSON pointer to the attribute.
         * 
         */
        pointer?: string;
      };
    }
    /**
     * Generic error response that returns one or more errors.
     * 
     */
    export interface ErrorResponse {
      /**
       * The list of errors returned in this response.
       * 
       */
      errors: ErrorObject[];
    }
    /**
     * Successful response to get a single account.
     * 
     */
    export interface GetAccountResponse {
      /**
       * Provides information about an Up bank account.
       * 
       */
      data: {
        /**
         * The type of this resource: `accounts`
         */
        type: string;
        /**
         * The unique identifier for this account.
         * 
         */
        id: string;
        attributes: {
          /**
           * The name associated with the account in the Up application.
           * 
           */
          displayName: string;
          /**
           * Specifies the type of bank account. Currently returned values are `SAVER`
           * and `TRANSACTIONAL`.
           * 
           */
          accountType: "SAVER" | "TRANSACTIONAL";
          /**
           * Provides information about a value of money.
           * 
           */
          balance: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          };
          /**
           * The date-time at which this account was first opened.
           * 
           */
          createdAt: string; // date-time
        };
        relationships: {
          transactions: {
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
        };
        links?: {
          /**
           * The canonical link to this resource within the API.
           * 
           */
          self: string;
        };
      };
    }
    /**
     * Successful response to get a single category and its ancestry.
     * 
     */
    export interface GetCategoryResponse {
      /**
       * Provides information about a category and its ancestry.
       * 
       */
      data: {
        /**
         * The type of this resource: `categories`
         */
        type: string;
        /**
         * The unique identifier for this category. This is a human-readable but
         * URL-safe value.
         * 
         */
        id: string;
        attributes: {
          /**
           * The name of this category as seen in the Up application.
           * 
           */
          name: string;
        };
        relationships: {
          parent: {
            data: {
              /**
               * The type of this resource: `categories`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            } | null;
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
          children: {
            data: {
              /**
               * The type of this resource: `categories`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            }[];
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
        };
        links?: {
          /**
           * The canonical link to this resource within the API.
           * 
           */
          self: string;
        };
      };
    }
    /**
     * Successful response to get a single transaction.
     * 
     */
    export interface GetTransactionResponse {
      /**
       * The transaction returned in this response.
       * 
       */
      data: {
        /**
         * The type of this resource: `transactions`
         */
        type: string;
        /**
         * The unique identifier for this transaction.
         * 
         */
        id: string;
        attributes: {
          /**
           * Specifies which stage of processing a transaction is currently at.
           * Currently returned values are `HELD` and `SETTLED`. When a transaction is
           * held, its account’s `availableBalance` is affected. When a transaction is
           * settled, its account’s `currentBalance` is affected.
           * 
           */
          status: "HELD" | "SETTLED";
          /**
           * The original, unprocessed text of the transaction. This is often not
           * a perfect indicator of the actual merchant, but it is useful for
           * reconciliation purposes in some cases.
           * 
           */
          rawText: string | null;
          /**
           * A short description for this transaction. Usually the merchant name
           * for purchases.
           * 
           */
          description: string;
          /**
           * Attached message for this transaction, such as a payment message, or a
           * transfer note.
           * 
           */
          message: string | null;
          /**
           * Provides information about the amount at which a transaction was in the
           * `HELD` status.
           * 
           */
          holdInfo: {
            /**
             * Provides information about a value of money.
             * 
             */
            amount: {
              /**
               * The ISO 4217 currency code.
               * 
               */
              currencyCode: string;
              /**
               * The amount of money, formatted as a string in the relevant currency.
               * For example, for an Australian dollar value of $10.56, this field will
               * be `"10.56"`. The currency symbol is not included in the string.
               * 
               */
              value: string;
              /**
               * The amount of money in the smallest denomination for the currency, as a
               * 64-bit integer.  For example, for an Australian dollar value of $10.56,
               * this field will be `1056`.
               * 
               */
              valueInBaseUnits: number;
            };
            /**
             * Provides information about a value of money.
             * 
             */
            foreignAmount: {
              /**
               * The ISO 4217 currency code.
               * 
               */
              currencyCode: string;
              /**
               * The amount of money, formatted as a string in the relevant currency.
               * For example, for an Australian dollar value of $10.56, this field will
               * be `"10.56"`. The currency symbol is not included in the string.
               * 
               */
              value: string;
              /**
               * The amount of money in the smallest denomination for the currency, as a
               * 64-bit integer.  For example, for an Australian dollar value of $10.56,
               * this field will be `1056`.
               * 
               */
              valueInBaseUnits: number;
            } | null;
          } | null;
          /**
           * Provides information about how a Round Up was applied, such as whether or
           * not a boost was included in the Round Up.
           * 
           */
          roundUp: {
            /**
             * Provides information about a value of money.
             * 
             */
            amount: {
              /**
               * The ISO 4217 currency code.
               * 
               */
              currencyCode: string;
              /**
               * The amount of money, formatted as a string in the relevant currency.
               * For example, for an Australian dollar value of $10.56, this field will
               * be `"10.56"`. The currency symbol is not included in the string.
               * 
               */
              value: string;
              /**
               * The amount of money in the smallest denomination for the currency, as a
               * 64-bit integer.  For example, for an Australian dollar value of $10.56,
               * this field will be `1056`.
               * 
               */
              valueInBaseUnits: number;
            };
            /**
             * Provides information about a value of money.
             * 
             */
            boostPortion: {
              /**
               * The ISO 4217 currency code.
               * 
               */
              currencyCode: string;
              /**
               * The amount of money, formatted as a string in the relevant currency.
               * For example, for an Australian dollar value of $10.56, this field will
               * be `"10.56"`. The currency symbol is not included in the string.
               * 
               */
              value: string;
              /**
               * The amount of money in the smallest denomination for the currency, as a
               * 64-bit integer.  For example, for an Australian dollar value of $10.56,
               * this field will be `1056`.
               * 
               */
              valueInBaseUnits: number;
            } | null;
          } | null;
          /**
           * Provides information about an instant reimbursement in the form of
           * cashback.
           * 
           */
          cashback: {
            /**
             * A brief description of why this cashback was paid.
             * 
             */
            description: string;
            /**
             * Provides information about a value of money.
             * 
             */
            amount: {
              /**
               * The ISO 4217 currency code.
               * 
               */
              currencyCode: string;
              /**
               * The amount of money, formatted as a string in the relevant currency.
               * For example, for an Australian dollar value of $10.56, this field will
               * be `"10.56"`. The currency symbol is not included in the string.
               * 
               */
              value: string;
              /**
               * The amount of money in the smallest denomination for the currency, as a
               * 64-bit integer.  For example, for an Australian dollar value of $10.56,
               * this field will be `1056`.
               * 
               */
              valueInBaseUnits: number;
            };
          } | null;
          /**
           * Provides information about a value of money.
           * 
           */
          amount: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          };
          /**
           * Provides information about a value of money.
           * 
           */
          foreignAmount: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          } | null;
          /**
           * The date-time at which this transaction settled. This field will be
           * `null` for transactions that are currently in the `HELD` status.
           * 
           */
          settledAt: string | null; // date-time
          /**
           * The date-time at which this transaction was first encountered.
           * 
           */
          createdAt: string; // date-time
        };
        relationships: {
          account: {
            data: {
              /**
               * The type of this resource: `accounts`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            };
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
          category: {
            data: {
              /**
               * The type of this resource: `categories`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            } | null;
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
          parentCategory: {
            data: {
              /**
               * The type of this resource: `categories`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            } | null;
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
          tags: {
            data: {
              /**
               * The type of this resource: `tags`
               */
              type: string;
              /**
               * The label of the tag, which also acts as the tag’s unique identifier.
               * 
               */
              id: string;
            }[];
            links?: {
              /**
               * The link to retrieve or modify linkage between this resources and the
               * related resource(s) in this relationship.
               * 
               */
              self: string;
            };
          };
        };
        links?: {
          /**
           * The canonical link to this resource within the API.
           * 
           */
          self: string;
        };
      };
    }
    /**
     * Successful response to get a single webhook.
     * 
     */
    export interface GetWebhookResponse {
      /**
       * Provides information about a webhook.
       * 
       */
      data: {
        /**
         * The type of this resource: `webhooks`
         */
        type: string;
        /**
         * The unique identifier for this webhook.
         * 
         */
        id: string;
        attributes: {
          /**
           * The URL that this webhook is configured to `POST` events to.
           * 
           */
          url: string;
          /**
           * An optional description that was provided at the time the webhook was
           * created.
           * 
           */
          description: string | null;
          /**
           * A shared secret key used to sign all webhook events sent to the
           * configured webhook URL. This field is returned only once, upon the
           * initial creation of the webhook. If lost, create a new webhook and
           * delete this webhook.
           * 
           * The webhook URL receives a request with a
           * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
           * the entire raw request body signed using this `secretKey`. It is
           * advised to compute and check this signature to verify the
           * authenticity of requests sent to the webhook URL. See
           * [Handling webhook events](#callback_post_webhookURL) for full
           * details.
           * 
           */
          secretKey?: string;
          /**
           * The date-time at which this webhook was created.
           * 
           */
          createdAt: string; // date-time
        };
        relationships: {
          logs: {
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
        };
        links?: {
          /**
           * The canonical link to this resource within the API.
           * 
           */
          self: string;
        };
      };
    }
    /**
     * Provides information about the amount at which a transaction was in the
     * `HELD` status.
     * 
     */
    export interface HoldInfoObject {
      /**
       * Provides information about a value of money.
       * 
       */
      amount: {
        /**
         * The ISO 4217 currency code.
         * 
         */
        currencyCode: string;
        /**
         * The amount of money, formatted as a string in the relevant currency.
         * For example, for an Australian dollar value of $10.56, this field will
         * be `"10.56"`. The currency symbol is not included in the string.
         * 
         */
        value: string;
        /**
         * The amount of money in the smallest denomination for the currency, as a
         * 64-bit integer.  For example, for an Australian dollar value of $10.56,
         * this field will be `1056`.
         * 
         */
        valueInBaseUnits: number;
      };
      /**
       * Provides information about a value of money.
       * 
       */
      foreignAmount: {
        /**
         * The ISO 4217 currency code.
         * 
         */
        currencyCode: string;
        /**
         * The amount of money, formatted as a string in the relevant currency.
         * For example, for an Australian dollar value of $10.56, this field will
         * be `"10.56"`. The currency symbol is not included in the string.
         * 
         */
        value: string;
        /**
         * The amount of money in the smallest denomination for the currency, as a
         * 64-bit integer.  For example, for an Australian dollar value of $10.56,
         * this field will be `1056`.
         * 
         */
        valueInBaseUnits: number;
      } | null;
    }
    /**
     * Successful response to get all accounts. This returns a paginated list of
     * accounts, which can be scrolled by following the `prev` and `next` links
     * if present.
     * 
     */
    export interface ListAccountsResponse {
      /**
       * The list of accounts returned in this response.
       * 
       */
      data: AccountResource[];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         * 
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         * 
         */
        next: string | null;
      };
    }
    /**
     * Successful response to get all categories and their ancestry. The
     * returned list is not paginated.
     * 
     */
    export interface ListCategoriesResponse {
      /**
       * The list of categories returned in this response.
       * 
       */
      data: CategoryResource[];
    }
    /**
     * Successful response to get all tags. This returns a paginated list of
     * tags, which can be scrolled by following the `prev` and `next` links if
     * present.
     * 
     */
    export interface ListTagsResponse {
      /**
       * The list of tags returned in this response.
       * 
       */
      data: TagResource[];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         * 
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         * 
         */
        next: string | null;
      };
    }
    /**
     * Successful response to get all transactions. This returns a paginated
     * list of transactions, which can be scrolled by following the `prev` and
     * `next` links if present.
     * 
     */
    export interface ListTransactionsResponse {
      /**
       * The list of transactions returned in this response.
       * 
       */
      data: TransactionResource[];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         * 
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         * 
         */
        next: string | null;
      };
    }
    /**
     * Successful response to get all delivery logs for a webhook. This returns
     * a paginated list of delivery logs, which can be scrolled by following the
     * `next` and `prev` links if present.
     * 
     */
    export interface ListWebhookDeliveryLogsResponse {
      /**
       * The list of delivery logs returned in this response.
       * 
       */
      data: WebhookDeliveryLogResource[];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         * 
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         * 
         */
        next: string | null;
      };
    }
    /**
     * Successful response to get all webhooks. This returns a paginated list of
     * webhooks, which can be scrolled by following the `prev` and `next` links
     * if present.
     * 
     */
    export interface ListWebhooksResponse {
      /**
       * The list of webhooks returned in this response.
       * 
       */
      data: WebhookResource[];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         * 
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         * 
         */
        next: string | null;
      };
    }
    /**
     * Provides information about a value of money.
     * 
     */
    export interface MoneyObject {
      /**
       * The ISO 4217 currency code.
       * 
       */
      currencyCode: string;
      /**
       * The amount of money, formatted as a string in the relevant currency.
       * For example, for an Australian dollar value of $10.56, this field will
       * be `"10.56"`. The currency symbol is not included in the string.
       * 
       */
      value: string;
      /**
       * The amount of money in the smallest denomination for the currency, as a
       * 64-bit integer.  For example, for an Australian dollar value of $10.56,
       * this field will be `1056`.
       * 
       */
      valueInBaseUnits: number;
    }
    /**
     * Basic ping response to verify authentication.
     * 
     */
    export interface PingResponse {
      meta: {
        /**
         * The unique identifier of the authenticated customer.
         * 
         */
        id: string;
        /**
         * A cute emoji that represents the response status.
         * 
         */
        statusEmoji: string;
      };
    }
    /**
     * Provides information about how a Round Up was applied, such as whether or
     * not a boost was included in the Round Up.
     * 
     */
    export interface RoundUpObject {
      /**
       * Provides information about a value of money.
       * 
       */
      amount: {
        /**
         * The ISO 4217 currency code.
         * 
         */
        currencyCode: string;
        /**
         * The amount of money, formatted as a string in the relevant currency.
         * For example, for an Australian dollar value of $10.56, this field will
         * be `"10.56"`. The currency symbol is not included in the string.
         * 
         */
        value: string;
        /**
         * The amount of money in the smallest denomination for the currency, as a
         * 64-bit integer.  For example, for an Australian dollar value of $10.56,
         * this field will be `1056`.
         * 
         */
        valueInBaseUnits: number;
      };
      /**
       * Provides information about a value of money.
       * 
       */
      boostPortion: {
        /**
         * The ISO 4217 currency code.
         * 
         */
        currencyCode: string;
        /**
         * The amount of money, formatted as a string in the relevant currency.
         * For example, for an Australian dollar value of $10.56, this field will
         * be `"10.56"`. The currency symbol is not included in the string.
         * 
         */
        value: string;
        /**
         * The amount of money in the smallest denomination for the currency, as a
         * 64-bit integer.  For example, for an Australian dollar value of $10.56,
         * this field will be `1056`.
         * 
         */
        valueInBaseUnits: number;
      } | null;
    }
    /**
     * Uniquely identifies a single tag in the API.
     * 
     */
    export interface TagInputResourceIdentifier {
      /**
       * The type of this resource: `tags`
       */
      type: string;
      /**
       * The label of the tag, which also acts as the tag’s unique identifier.
       * 
       */
      id: string;
    }
    /**
     * Provides information about a tag.
     * 
     */
    export interface TagResource {
      /**
       * The type of this resource: `tags`
       */
      type: string;
      /**
       * The label of the tag, which also acts as the tag’s unique identifier.
       * 
       */
      id: string;
      relationships: {
        transactions: {
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
      };
    }
    export interface TransactionResource {
      /**
       * The type of this resource: `transactions`
       */
      type: string;
      /**
       * The unique identifier for this transaction.
       * 
       */
      id: string;
      attributes: {
        /**
         * Specifies which stage of processing a transaction is currently at.
         * Currently returned values are `HELD` and `SETTLED`. When a transaction is
         * held, its account’s `availableBalance` is affected. When a transaction is
         * settled, its account’s `currentBalance` is affected.
         * 
         */
        status: "HELD" | "SETTLED";
        /**
         * The original, unprocessed text of the transaction. This is often not
         * a perfect indicator of the actual merchant, but it is useful for
         * reconciliation purposes in some cases.
         * 
         */
        rawText: string | null;
        /**
         * A short description for this transaction. Usually the merchant name
         * for purchases.
         * 
         */
        description: string;
        /**
         * Attached message for this transaction, such as a payment message, or a
         * transfer note.
         * 
         */
        message: string | null;
        /**
         * Provides information about the amount at which a transaction was in the
         * `HELD` status.
         * 
         */
        holdInfo: {
          /**
           * Provides information about a value of money.
           * 
           */
          amount: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          };
          /**
           * Provides information about a value of money.
           * 
           */
          foreignAmount: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          } | null;
        } | null;
        /**
         * Provides information about how a Round Up was applied, such as whether or
         * not a boost was included in the Round Up.
         * 
         */
        roundUp: {
          /**
           * Provides information about a value of money.
           * 
           */
          amount: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          };
          /**
           * Provides information about a value of money.
           * 
           */
          boostPortion: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          } | null;
        } | null;
        /**
         * Provides information about an instant reimbursement in the form of
         * cashback.
         * 
         */
        cashback: {
          /**
           * A brief description of why this cashback was paid.
           * 
           */
          description: string;
          /**
           * Provides information about a value of money.
           * 
           */
          amount: {
            /**
             * The ISO 4217 currency code.
             * 
             */
            currencyCode: string;
            /**
             * The amount of money, formatted as a string in the relevant currency.
             * For example, for an Australian dollar value of $10.56, this field will
             * be `"10.56"`. The currency symbol is not included in the string.
             * 
             */
            value: string;
            /**
             * The amount of money in the smallest denomination for the currency, as a
             * 64-bit integer.  For example, for an Australian dollar value of $10.56,
             * this field will be `1056`.
             * 
             */
            valueInBaseUnits: number;
          };
        } | null;
        /**
         * Provides information about a value of money.
         * 
         */
        amount: {
          /**
           * The ISO 4217 currency code.
           * 
           */
          currencyCode: string;
          /**
           * The amount of money, formatted as a string in the relevant currency.
           * For example, for an Australian dollar value of $10.56, this field will
           * be `"10.56"`. The currency symbol is not included in the string.
           * 
           */
          value: string;
          /**
           * The amount of money in the smallest denomination for the currency, as a
           * 64-bit integer.  For example, for an Australian dollar value of $10.56,
           * this field will be `1056`.
           * 
           */
          valueInBaseUnits: number;
        };
        /**
         * Provides information about a value of money.
         * 
         */
        foreignAmount: {
          /**
           * The ISO 4217 currency code.
           * 
           */
          currencyCode: string;
          /**
           * The amount of money, formatted as a string in the relevant currency.
           * For example, for an Australian dollar value of $10.56, this field will
           * be `"10.56"`. The currency symbol is not included in the string.
           * 
           */
          value: string;
          /**
           * The amount of money in the smallest denomination for the currency, as a
           * 64-bit integer.  For example, for an Australian dollar value of $10.56,
           * this field will be `1056`.
           * 
           */
          valueInBaseUnits: number;
        } | null;
        /**
         * The date-time at which this transaction settled. This field will be
         * `null` for transactions that are currently in the `HELD` status.
         * 
         */
        settledAt: string | null; // date-time
        /**
         * The date-time at which this transaction was first encountered.
         * 
         */
        createdAt: string; // date-time
      };
      relationships: {
        account: {
          data: {
            /**
             * The type of this resource: `accounts`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          };
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
        category: {
          data: {
            /**
             * The type of this resource: `categories`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          } | null;
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
        parentCategory: {
          data: {
            /**
             * The type of this resource: `categories`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          } | null;
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
        tags: {
          data: {
            /**
             * The type of this resource: `tags`
             */
            type: string;
            /**
             * The label of the tag, which also acts as the tag’s unique identifier.
             * 
             */
            id: string;
          }[];
          links?: {
            /**
             * The link to retrieve or modify linkage between this resources and the
             * related resource(s) in this relationship.
             * 
             */
            self: string;
          };
        };
      };
      links?: {
        /**
         * The canonical link to this resource within the API.
         * 
         */
        self: string;
      };
    }
    /**
     * Specifies which stage of processing a transaction is currently at.
     * Currently returned values are `HELD` and `SETTLED`. When a transaction is
     * held, its account’s `availableBalance` is affected. When a transaction is
     * settled, its account’s `currentBalance` is affected.
     * 
     */
    export type TransactionStatusEnum = "HELD" | "SETTLED";
    /**
     * Request to add or remove tags associated with a transaction.
     * 
     */
    export interface UpdateTransactionTagsRequest {
      /**
       * The tags to add to or remove from the transaction.
       * 
       */
      data: TagInputResourceIdentifier[];
    }
    /**
     * Provides historical webhook event delivery information for analysis and
     * debugging purposes.
     * 
     */
    export interface WebhookDeliveryLogResource {
      /**
       * The type of this resource: `webhook-delivery-logs`
       */
      type: string;
      /**
       * The unique identifier for this log entry.
       * 
       */
      id: string;
      attributes: {
        /**
         * Information about the request that was sent to the webhook URL.
         * 
         */
        request: {
          /**
           * The payload that was sent in the request body.
           * 
           */
          body: string;
        };
        /**
         * Information about the response that was received from the webhook URL.
         * 
         */
        response: {
          /**
           * The HTTP status code received in the response.
           * 
           */
          statusCode: number;
          /**
           * The payload that was received in the response body.
           * 
           */
          body: string;
        } | null;
        /**
         * Specifies the nature of the success or failure of a webhook delivery
         * attempt to the subscribed webhook URL. The currently returned values are
         * described below:
         * 
         * - **`DELIVERED`**: The event was delivered to the webhook URL
         *   successfully and a `200` response was received.
         * - **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.
         * - **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL
         *   but a non-`200` response was received.
         * 
         */
        deliveryStatus: "DELIVERED" | "UNDELIVERABLE" | "BAD_RESPONSE_CODE";
        /**
         * The date-time at which this log entry was created.
         * 
         */
        createdAt: string; // date-time
      };
      relationships: {
        webhookEvent: {
          data: {
            /**
             * The type of this resource: `webhook-events`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          };
        };
      };
    }
    /**
     * Specifies the nature of the success or failure of a webhook delivery
     * attempt to the subscribed webhook URL. The currently returned values are
     * described below:
     * 
     * - **`DELIVERED`**: The event was delivered to the webhook URL
     *   successfully and a `200` response was received.
     * - **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.
     * - **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL
     *   but a non-`200` response was received.
     * 
     */
    export type WebhookDeliveryStatusEnum = "DELIVERED" | "UNDELIVERABLE" | "BAD_RESPONSE_CODE";
    /**
     * Asynchronous callback request used for webhook event delivery.
     * 
     */
    export interface WebhookEventCallback {
      /**
       * Provides the event data used in asynchronous webhook event callbacks to
       * subscribed endpoints. Webhooks events have defined `eventType`s and may
       * optionally relate to other resources within the Up API.
       * 
       */
      data: {
        /**
         * The type of this resource: `webhook-events`
         */
        type: string;
        /**
         * The unique identifier for this event. This will remain constant across
         * delivery retries.
         * 
         */
        id: string;
        attributes: {
          /**
           * Specifies the type of a webhook event. This can be used to determine what
           * action to take in response to the event, such as which relationships to
           * expect.
           * 
           */
          eventType: "TRANSACTION_CREATED" | "TRANSACTION_SETTLED" | "TRANSACTION_DELETED" | "PING";
          /**
           * The date-time at which this event was generated.
           * 
           */
          createdAt: string; // date-time
        };
        relationships: {
          webhook: {
            data: {
              /**
               * The type of this resource: `webhooks`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            };
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
          transaction?: {
            data: {
              /**
               * The type of this resource: `transactions`
               */
              type: string;
              /**
               * The unique identifier of the resource within its type.
               * 
               */
              id: string;
            };
            links?: {
              /**
               * The link to retrieve the related resource(s) in this relationship.
               * 
               */
              related: string;
            };
          };
        };
      };
    }
    /**
     * Provides the event data used in asynchronous webhook event callbacks to
     * subscribed endpoints. Webhooks events have defined `eventType`s and may
     * optionally relate to other resources within the Up API.
     * 
     */
    export interface WebhookEventResource {
      /**
       * The type of this resource: `webhook-events`
       */
      type: string;
      /**
       * The unique identifier for this event. This will remain constant across
       * delivery retries.
       * 
       */
      id: string;
      attributes: {
        /**
         * Specifies the type of a webhook event. This can be used to determine what
         * action to take in response to the event, such as which relationships to
         * expect.
         * 
         */
        eventType: "TRANSACTION_CREATED" | "TRANSACTION_SETTLED" | "TRANSACTION_DELETED" | "PING";
        /**
         * The date-time at which this event was generated.
         * 
         */
        createdAt: string; // date-time
      };
      relationships: {
        webhook: {
          data: {
            /**
             * The type of this resource: `webhooks`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          };
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
        transaction?: {
          data: {
            /**
             * The type of this resource: `transactions`
             */
            type: string;
            /**
             * The unique identifier of the resource within its type.
             * 
             */
            id: string;
          };
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
      };
    }
    /**
     * Specifies the type of a webhook event. This can be used to determine what
     * action to take in response to the event, such as which relationships to
     * expect.
     * 
     */
    export type WebhookEventTypeEnum = "TRANSACTION_CREATED" | "TRANSACTION_SETTLED" | "TRANSACTION_DELETED" | "PING";
    /**
     * Represents a webhook specified as request input.
     * 
     */
    export interface WebhookInputResource {
      attributes: {
        /**
         * The URL that this webhook should post events to. This must be a valid
         * HTTP or HTTPS URL that does not exceed 300 characters in length.
         * 
         */
        url: string; // uri
        /**
         * An optional description for this webhook, up to 64 characters in
         * length.
         * 
         */
        description?: string | null;
      };
    }
    /**
     * Provides information about a webhook.
     * 
     */
    export interface WebhookResource {
      /**
       * The type of this resource: `webhooks`
       */
      type: string;
      /**
       * The unique identifier for this webhook.
       * 
       */
      id: string;
      attributes: {
        /**
         * The URL that this webhook is configured to `POST` events to.
         * 
         */
        url: string;
        /**
         * An optional description that was provided at the time the webhook was
         * created.
         * 
         */
        description: string | null;
        /**
         * A shared secret key used to sign all webhook events sent to the
         * configured webhook URL. This field is returned only once, upon the
         * initial creation of the webhook. If lost, create a new webhook and
         * delete this webhook.
         * 
         * The webhook URL receives a request with a
         * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
         * the entire raw request body signed using this `secretKey`. It is
         * advised to compute and check this signature to verify the
         * authenticity of requests sent to the webhook URL. See
         * [Handling webhook events](#callback_post_webhookURL) for full
         * details.
         * 
         */
        secretKey?: string;
        /**
         * The date-time at which this webhook was created.
         * 
         */
        createdAt: string; // date-time
      };
      relationships: {
        logs: {
          links?: {
            /**
             * The link to retrieve the related resource(s) in this relationship.
             * 
             */
            related: string;
          };
        };
      };
      links?: {
        /**
         * The canonical link to this resource within the API.
         * 
         */
        self: string;
      };
    }
  }
}
declare namespace Paths {
  namespace AddTagsToTransaction {
    namespace Parameters {
      export type TransactionId = string;
    }
    export interface PathParameters {
      transactionId: Parameters.TransactionId;
    }
    export type RequestBody = Components.Schemas.UpdateTransactionTagsRequest;
  }
  namespace CreateWebhook {
    export type RequestBody = Components.Schemas.CreateWebhookRequest;
    namespace Responses {
      export type $201 = Components.Schemas.CreateWebhookResponse;
    }
  }
  namespace DeleteWebhook {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace GetAccountById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.GetAccountResponse;
    }
  }
  namespace GetAccounts {
    namespace Parameters {
      export type PageSize = number;
    }
    export interface QueryParameters {
      "page[size]"?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListAccountsResponse;
    }
  }
  namespace GetCategories {
    namespace Parameters {
      export type FilterParent = string;
    }
    export interface QueryParameters {
      "filter[parent]"?: Parameters.FilterParent;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListCategoriesResponse;
    }
  }
  namespace GetCategoryById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.GetCategoryResponse;
    }
  }
  namespace GetTags {
    namespace Parameters {
      export type PageSize = number;
    }
    export interface QueryParameters {
      "page[size]"?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListTagsResponse;
    }
  }
  namespace GetTransactionById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.GetTransactionResponse;
    }
  }
  namespace GetTransactions {
    namespace Parameters {
      export type FilterCategory = string;
      export type FilterSince = string; // date-time
      export type FilterStatus = Components.Schemas.TransactionStatusEnum;
      export type FilterTag = string;
      export type FilterUntil = string; // date-time
      export type PageSize = number;
    }
    export interface QueryParameters {
      "page[size]"?: Parameters.PageSize;
      "filter[status]"?: Parameters.FilterStatus;
      "filter[since]"?: Parameters.FilterSince; // date-time
      "filter[until]"?: Parameters.FilterUntil; // date-time
      "filter[category]"?: Parameters.FilterCategory;
      "filter[tag]"?: Parameters.FilterTag;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListTransactionsResponse;
    }
  }
  namespace GetTransactionsByAccount {
    namespace Parameters {
      export type AccountId = string;
      export type FilterCategory = string;
      export type FilterSince = string; // date-time
      export type FilterStatus = Components.Schemas.TransactionStatusEnum;
      export type FilterTag = string;
      export type FilterUntil = string; // date-time
      export type PageSize = number;
    }
    export interface PathParameters {
      accountId: Parameters.AccountId;
    }
    export interface QueryParameters {
      "page[size]"?: Parameters.PageSize;
      "filter[status]"?: Parameters.FilterStatus;
      "filter[since]"?: Parameters.FilterSince; // date-time
      "filter[until]"?: Parameters.FilterUntil; // date-time
      "filter[category]"?: Parameters.FilterCategory;
      "filter[tag]"?: Parameters.FilterTag;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListTransactionsResponse;
    }
  }
  namespace GetWebhookById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.GetWebhookResponse;
    }
  }
  namespace GetWebhookLogsById {
    namespace Parameters {
      export type PageSize = number;
      export type WebhookId = string;
    }
    export interface PathParameters {
      webhookId: Parameters.WebhookId;
    }
    export interface QueryParameters {
      "page[size]"?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListWebhookDeliveryLogsResponse;
    }
  }
  namespace GetWebhooks {
    namespace Parameters {
      export type PageSize = number;
    }
    export interface QueryParameters {
      "page[size]"?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.ListWebhooksResponse;
    }
  }
  namespace Ping {
    namespace Responses {
      export type $200 = Components.Schemas.PingResponse;
      export type $401 = Components.Schemas.ErrorResponse;
    }
  }
  namespace PingWebhook {
    namespace Parameters {
      export type WebhookId = string;
    }
    export interface PathParameters {
      webhookId: Parameters.WebhookId;
    }
    namespace Responses {
      export type $201 = Components.Schemas.WebhookEventCallback;
    }
  }
  namespace RemoveTagFromTransaction {
    namespace Parameters {
      export type TransactionId = string;
    }
    export interface PathParameters {
      transactionId: Parameters.TransactionId;
    }
    export type RequestBody = Components.Schemas.UpdateTransactionTagsRequest;
  }
}

export interface OperationMethods {
  /**
   * getAccounts - List accounts
   * 
   * Retrieve a paginated list of all accounts for the currently
   * authenticated user. The returned list is paginated and can be scrolled
   * by following the `prev` and `next` links where present.
   * 
   */
  'getAccounts'(
    parameters?: Parameters<Paths.GetAccounts.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAccounts.Responses.$200>
  /**
   * getAccountById - Retrieve account
   * 
   * Retrieve a specific account by providing its unique identifier.
   * 
   */
  'getAccountById'(
    parameters?: Parameters<Paths.GetAccountById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAccountById.Responses.$200>
  /**
   * getCategories - List categories
   * 
   * Retrieve a list of all categories and their ancestry. The returned list
   * is not paginated.
   * 
   */
  'getCategories'(
    parameters?: Parameters<Paths.GetCategories.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCategories.Responses.$200>
  /**
   * getCategoryById - Retrieve category
   * 
   * Retrieve a specific category by providing its unique identifier.
   * 
   */
  'getCategoryById'(
    parameters?: Parameters<Paths.GetCategoryById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCategoryById.Responses.$200>
  /**
   * ping - Ping
   * 
   * Make a basic ping request to the API. This is useful to verify that
   * authentication is functioning correctly. On authentication success an
   * HTTP `200` status is returned. On failure an HTTP `401` error response
   * is returned.
   * 
   */
  'ping'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Ping.Responses.$200 | Paths.Ping.Responses.$401>
  /**
   * getTags - List tags
   * 
   * Retrieve a list of all tags currently in use. The returned list is
   * [paginated](#pagination) and can be scrolled by following the `next`
   * and `prev` links where present. Results are ordered lexicographically.
   * The `transactions` relationship for each tag exposes a link
   * to get the transactions with the given tag.
   * 
   */
  'getTags'(
    parameters?: Parameters<Paths.GetTags.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTags.Responses.$200>
  /**
   * addTagsToTransaction - Add tags to transaction
   * 
   * Associates one or more tags with a specific transaction. No more than 6
   * tags may be present on any single transaction. Duplicate tags are
   * silently ignored. An HTTP `204` is returned on success. The associated
   * tags, along with this request URL, are also exposed via the `tags`
   * relationship on the transaction resource returned from
   * `/transactions/{id}`.
   * 
   */
  'addTagsToTransaction'(
    parameters?: Parameters<Paths.AddTagsToTransaction.PathParameters>,
    data?: Paths.AddTagsToTransaction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * removeTagFromTransaction - Remove tags from transaction
   * 
   * Disassociates one or more tags from a specific transaction. Tags that are
   * not associated are silently ignored. An HTTP `204` is returned on
   * success. The associated tags, along with this request URL, are also
   * exposed via the `tags` relationship on the transaction resource returned
   * from `/transactions/{id}`.
   * 
   */
  'removeTagFromTransaction'(
    parameters?: Parameters<Paths.RemoveTagFromTransaction.PathParameters>,
    data?: Paths.RemoveTagFromTransaction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getTransactions - List transactions
   * 
   * Retrieve a list of all transactions across all accounts for the currently
   * authenticated user. The returned list is [paginated](#pagination) and can
   * be scrolled by following the `next` and `prev` links where present. To
   * narrow the results to a specific date range pass one or both of
   * `filter[since]` and `filter[until]` in the query string. These filter
   * parameters **should not** be used for pagination. Results are ordered
   * newest first to oldest last.
   * 
   */
  'getTransactions'(
    parameters?: Parameters<Paths.GetTransactions.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactions.Responses.$200>
  /**
   * getTransactionById - Retrieve transaction
   * 
   * Retrieve a specific transaction by providing its unique identifier.
   * 
   */
  'getTransactionById'(
    parameters?: Parameters<Paths.GetTransactionById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactionById.Responses.$200>
  /**
   * getTransactionsByAccount - List transactions by account
   * 
   * Retrieve a list of all transactions for a specific account. The returned
   * list is [paginated](#pagination) and can be scrolled by following the
   * `next` and `prev` links where present. To narrow the results to a
   * specific date range pass one or both of `filter[since]` and
   * `filter[until]` in the query string. These filter parameters
   * **should not** be used for pagination. Results are ordered newest first
   * to oldest last.
   * 
   */
  'getTransactionsByAccount'(
    parameters?: Parameters<Paths.GetTransactionsByAccount.PathParameters & Paths.GetTransactionsByAccount.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactionsByAccount.Responses.$200>
  /**
   * getWebhooks - List webhooks
   * 
   * Retrieve a list of configured webhooks. The returned list is
   * [paginated](#pagination) and can be scrolled by following the `next`
   * and `prev` links where present. Results are ordered oldest first to
   * newest last.
   * 
   */
  'getWebhooks'(
    parameters?: Parameters<Paths.GetWebhooks.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWebhooks.Responses.$200>
  /**
   * createWebhook - Create webhook
   * 
   * Create a new webhook with a given URL. The URL will receive webhook
   * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
   * `200` status on success.
   * 
   * There is currently a limit of 10 webhooks at any given time. Once this
   * limit is reached, existing webhooks will need to be deleted before new
   * webhooks can be created.
   * 
   * Event delivery is retried with exponential backoff if the URL is
   * unreachable or it does not respond with a `200` status. The response
   * includes a `secretKey` attribute, which is used to sign requests sent to
   * the webhook URL. It will not be returned from any other endpoints within
   * the Up API. If the `secretKey` is lost, simply create a new webhook with
   * the same URL, capture its `secretKey` and then delete the original
   * webhook. See [Handling webhook events](#callback_post_webhookURL) for
   * details on how to process webhook events.
   * 
   * It is probably a good idea to test the webhook by
   * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
   * it.
   * 
   */
  'createWebhook'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.CreateWebhook.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateWebhook.Responses.$201>
  /**
   * getWebhookById - Retrieve webhook
   * 
   * Retrieve a specific webhook by providing its unique identifier.
   * 
   */
  'getWebhookById'(
    parameters?: Parameters<Paths.GetWebhookById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWebhookById.Responses.$200>
  /**
   * deleteWebhook - Delete webhook
   * 
   * Delete a specific webhook by providing its unique identifier. Once
   * deleted, webhook events will no longer be sent to the configured URL.
   * 
   */
  'deleteWebhook'(
    parameters?: Parameters<Paths.DeleteWebhook.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * pingWebhook - Ping webhook
   * 
   * Send a `PING` event to a webhook by providing its unique identifier.
   * This is useful for testing and debugging purposes. The event is delivered
   * asynchronously and its data is returned in the response to this request.
   * 
   */
  'pingWebhook'(
    parameters?: Parameters<Paths.PingWebhook.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingWebhook.Responses.$201>
  /**
   * getWebhookLogsById - List webhook logs
   * 
   * Retrieve a list of delivery logs for a webhook by providing its unique
   * identifier. This is useful for analysis and debugging purposes. The
   * returned list is [paginated](#pagination) and can be scrolled by
   * following the `next` and `prev` links where present. Results are ordered
   * newest first to oldest last. Logs may be automatically purged after a
   * period of time.
   * 
   */
  'getWebhookLogsById'(
    parameters?: Parameters<Paths.GetWebhookLogsById.PathParameters & Paths.GetWebhookLogsById.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWebhookLogsById.Responses.$200>
}

export interface PathsDictionary {
  ['/accounts']: {
    /**
     * getAccounts - List accounts
     * 
     * Retrieve a paginated list of all accounts for the currently
     * authenticated user. The returned list is paginated and can be scrolled
     * by following the `prev` and `next` links where present.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAccounts.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAccounts.Responses.$200>
  }
  ['/accounts/{id}']: {
    /**
     * getAccountById - Retrieve account
     * 
     * Retrieve a specific account by providing its unique identifier.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetAccountById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAccountById.Responses.$200>
  }
  ['/categories']: {
    /**
     * getCategories - List categories
     * 
     * Retrieve a list of all categories and their ancestry. The returned list
     * is not paginated.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetCategories.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCategories.Responses.$200>
  }
  ['/categories/{id}']: {
    /**
     * getCategoryById - Retrieve category
     * 
     * Retrieve a specific category by providing its unique identifier.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetCategoryById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCategoryById.Responses.$200>
  }
  ['/util/ping']: {
    /**
     * ping - Ping
     * 
     * Make a basic ping request to the API. This is useful to verify that
     * authentication is functioning correctly. On authentication success an
     * HTTP `200` status is returned. On failure an HTTP `401` error response
     * is returned.
     * 
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Ping.Responses.$200 | Paths.Ping.Responses.$401>
  }
  ['/tags']: {
    /**
     * getTags - List tags
     * 
     * Retrieve a list of all tags currently in use. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered lexicographically.
     * The `transactions` relationship for each tag exposes a link
     * to get the transactions with the given tag.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetTags.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTags.Responses.$200>
  }
  ['/transactions/{transactionId}/relationships/tags']: {
    /**
     * addTagsToTransaction - Add tags to transaction
     * 
     * Associates one or more tags with a specific transaction. No more than 6
     * tags may be present on any single transaction. Duplicate tags are
     * silently ignored. An HTTP `204` is returned on success. The associated
     * tags, along with this request URL, are also exposed via the `tags`
     * relationship on the transaction resource returned from
     * `/transactions/{id}`.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.AddTagsToTransaction.PathParameters>,
      data?: Paths.AddTagsToTransaction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * removeTagFromTransaction - Remove tags from transaction
     * 
     * Disassociates one or more tags from a specific transaction. Tags that are
     * not associated are silently ignored. An HTTP `204` is returned on
     * success. The associated tags, along with this request URL, are also
     * exposed via the `tags` relationship on the transaction resource returned
     * from `/transactions/{id}`.
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.RemoveTagFromTransaction.PathParameters>,
      data?: Paths.RemoveTagFromTransaction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transactions']: {
    /**
     * getTransactions - List transactions
     * 
     * Retrieve a list of all transactions across all accounts for the currently
     * authenticated user. The returned list is [paginated](#pagination) and can
     * be scrolled by following the `next` and `prev` links where present. To
     * narrow the results to a specific date range pass one or both of
     * `filter[since]` and `filter[until]` in the query string. These filter
     * parameters **should not** be used for pagination. Results are ordered
     * newest first to oldest last.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactions.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactions.Responses.$200>
  }
  ['/transactions/{id}']: {
    /**
     * getTransactionById - Retrieve transaction
     * 
     * Retrieve a specific transaction by providing its unique identifier.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactionById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactionById.Responses.$200>
  }
  ['/accounts/{accountId}/transactions']: {
    /**
     * getTransactionsByAccount - List transactions by account
     * 
     * Retrieve a list of all transactions for a specific account. The returned
     * list is [paginated](#pagination) and can be scrolled by following the
     * `next` and `prev` links where present. To narrow the results to a
     * specific date range pass one or both of `filter[since]` and
     * `filter[until]` in the query string. These filter parameters
     * **should not** be used for pagination. Results are ordered newest first
     * to oldest last.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactionsByAccount.PathParameters & Paths.GetTransactionsByAccount.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactionsByAccount.Responses.$200>
  }
  ['/webhooks']: {
    /**
     * getWebhooks - List webhooks
     * 
     * Retrieve a list of configured webhooks. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered oldest first to
     * newest last.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetWebhooks.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWebhooks.Responses.$200>
    /**
     * createWebhook - Create webhook
     * 
     * Create a new webhook with a given URL. The URL will receive webhook
     * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
     * `200` status on success.
     * 
     * There is currently a limit of 10 webhooks at any given time. Once this
     * limit is reached, existing webhooks will need to be deleted before new
     * webhooks can be created.
     * 
     * Event delivery is retried with exponential backoff if the URL is
     * unreachable or it does not respond with a `200` status. The response
     * includes a `secretKey` attribute, which is used to sign requests sent to
     * the webhook URL. It will not be returned from any other endpoints within
     * the Up API. If the `secretKey` is lost, simply create a new webhook with
     * the same URL, capture its `secretKey` and then delete the original
     * webhook. See [Handling webhook events](#callback_post_webhookURL) for
     * details on how to process webhook events.
     * 
     * It is probably a good idea to test the webhook by
     * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
     * it.
     * 
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.CreateWebhook.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateWebhook.Responses.$201>
  }
  ['/webhooks/{id}']: {
    /**
     * getWebhookById - Retrieve webhook
     * 
     * Retrieve a specific webhook by providing its unique identifier.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetWebhookById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWebhookById.Responses.$200>
    /**
     * deleteWebhook - Delete webhook
     * 
     * Delete a specific webhook by providing its unique identifier. Once
     * deleted, webhook events will no longer be sent to the configured URL.
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteWebhook.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/webhooks/{webhookId}/ping']: {
    /**
     * pingWebhook - Ping webhook
     * 
     * Send a `PING` event to a webhook by providing its unique identifier.
     * This is useful for testing and debugging purposes. The event is delivered
     * asynchronously and its data is returned in the response to this request.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.PingWebhook.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingWebhook.Responses.$201>
  }
  ['/webhooks/{webhookId}/logs']: {
    /**
     * getWebhookLogsById - List webhook logs
     * 
     * Retrieve a list of delivery logs for a webhook by providing its unique
     * identifier. This is useful for analysis and debugging purposes. The
     * returned list is [paginated](#pagination) and can be scrolled by
     * following the `next` and `prev` links where present. Results are ordered
     * newest first to oldest last. Logs may be automatically purged after a
     * period of time.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetWebhookLogsById.PathParameters & Paths.GetWebhookLogsById.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWebhookLogsById.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
